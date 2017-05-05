var express = require('express');
var router = express.Router();
var modelsU = require('../models/user.js')
var modelsP = require('../models/post.js')
var id;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//创建新账号
router.post('/',function(req,res){
	var account=req.body.account;
    var password=req.body.password;
	//查看是否已注册
	modelsU.regin.findOne({
        account:account
    }).then(function(userInfo){
	    if (userInfo) {
	    	res.send("0");
    	}else{
    		//保存到数据库
    		if (!account) {
    			res.send("1");
    		}else{
    			var newAccount = new modelsU.regin({
					account : account,
			    	password : password
				});
				newAccount.save((err,data) => {
			        if (err) {
			            res.send(err);
			        } else {
			            res.send(data);
			            console.log(data);
			        }
			    });
    		}
    	}
    })
})
//用户登录
router.post('/login',function(req,res){
  modelsU.regin.find({account:req.body.account},{account:true},(err,data) => {
        if (err) {
            res.send(err);
            console.log('false')
        } else {
            res.send(data);
            console.log(data)
            if (data.length) {
              id = req.body.account
            }else{
              console.log("用户不存在");
            }
        }
    });
})
//用户登出
router.get('/logout',function(req,res){
  modelsU.regin.find({account:req.body.account},{account:true},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            req.body.account = null;
            res.send(data);
        }
        id = req.body.account
    })
})
//发布内容
router.post('/post',function(req,res){
  var newPostcon = new modelsP.Post({
    post : req.body.post,
    username : id
  });
  newPostcon.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
/*router.post('/post',function(req,res){
  modelsP.Post.find({post:req.body.post},{post:true},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})*/
module.exports = router;

module.exports = router;
