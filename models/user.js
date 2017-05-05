var mongoose = require('./db.js');
//定义schema结构
var Schema = mongoose.Schema({
	account : String,
    password : String
});

//定义model并导出
var  Models = {
    regin : mongoose.model('regin',Schema)
}

module.exports = Models;