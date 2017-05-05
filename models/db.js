var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/movie");//链接数据库

//链接成功
mongoose.connection.on('connected', function () {    
    console.log('yes');  
}); 

//链接失败
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
}); 

module.exports = mongoose;