var mongoose = require('./db.js');
//定义schema结构
var Postcon = mongoose.Schema({
	post : String,
	username : String
});

//定义model并导出
var  Models = {
    Post : mongoose.model('Post',Postcon)
}

module.exports = Models;
