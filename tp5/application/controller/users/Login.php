<?php
namespace app\controller\users;
use think\Db;
use think\Controller;
use think\View;
class Login extends Controller
{
    public function index()
    {
		$view = new View();
		return $view->fetch('users/login/login');
    }

	/**
	 *  客户登录
	 * @return string
	 */
	public function login(){
		$username = $_POST['username'];
		$pwd = md5($_POST['pass']);
		// 查询用户密码是否正确
		$user = Db::name('user')->where(array('username'=>$username ,'password'=>$pwd))->find();
		$view = new View();
		if(empty($user)){
			// 密码错误 留在当前页
			$return_page = 'users/login/login';
		}else{
			// 跳转至商品列表页
			$return_page = 'users/product/product_list';
		}
		return $view->fetch($return_page);
	}

	/**
	 * 验证用户是否存在
	 */
	public function checkUser(){
		$ret_array = array();
		$ret_array['rc'] = 0;
		$ret_array['rv'] = '';
		$username = $_POST['username'];
		$user = Db::name('user')->where('username' ,$username)->find();
		if(!empty($user)){
			$ret_array['rc'] = 311;
			$ret_array['rv'] = '用户已存在';
		}
		return array('rc'=>0);
	}

	/**
	 * 验证手机验证码是否正确
	 */
	public function verycode(){
		return array('rc'=>0);
	}

	/**
	 * 注册用户
	 */
	public function register(){
		$user_info = $_POST['data'];
		// 密码加密
		$user_info['password'] = md5($user_info['password']);
		$id = Db::name('user')->create($user_info);
		print_r('注册成功'.$id);
		$view = new View();
		return $view->fetch('users/login/login');
	}
}
