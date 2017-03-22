<?php
namespace app\controller\admin;
use think\Db;
use think\Controller;
class Login extends Controller
{
    public function index()
    {
		return $this->fetch();
    }
	public function login()
	{
		$name = $_POST['username'];
		$pwd = $_POST['pass'];
		$user = Db::name('auser')->find();
		print_r($user);
		return 'name:' . $name .' pwd:' . $pwd;
	}
}
