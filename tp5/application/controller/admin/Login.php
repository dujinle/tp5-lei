<?php
namespace app\controller\admin;
use think\Db;
use think\Controller;
use think\View;
class Login extends Controller
{
    public function index()
    {
		return $this->fetch();
    }
	public function login()
	{
		#TODO
#		$name = $_POST['username'];
#		$pwd = $_POST['pass'];
#		$user = Db::name('auser')->find();
#		print_r($user);
#		return 'name:' . $name .' pwd:' . $pwd;
		$view = new View();
		return $view->fetch('admin/index/index');
	}
}
