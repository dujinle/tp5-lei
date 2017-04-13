//============================================================
//ReadMe
//Command mongo mongodh.js
// 辅助函数 用于 对 timestamp 进行转换
function date2timestamp ( date ) {
	return Math.floor( date.getTime() / 1000 );
}

function timestamp2date ( timestamp ) {
	return new Date( timestamp * 1000 );
}

function now2timestamp ( ) {
	return date2timestamp( new Date() );
}
//============================================================
//初始化 web_db 数据库
db = connect('web_db');

//添加一条记录到auser数据表
db.auser.insert(
	{
		"name":"admin",
		"password":"admin",
		"creat_time":now2timestamp()
	}
);
