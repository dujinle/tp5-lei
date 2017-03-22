SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for auser
-- ----------------------------
DROP TABLE IF EXISTS `auser`;
CREATE TABLE `auser` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`username` varchar(60) NOT NULL COMMENT '管理员用户名',
	`password` varchar(60) NOT NULL COMMENT '管理员密码',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of areply
-- ----------------------------
INSERT INTO `areply` VALUES ('1', 'admin', 'admin');
