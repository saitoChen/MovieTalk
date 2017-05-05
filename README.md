# MovieTalk
## 一款分享影评的移动端Web App<br>
### 描述
	基于vue2.0全家桶，Node.js，MongoDB实现的前后端分离的影评网站
### 预览
![](https://github.com/saitoChen/excise/raw/master/gif/talk.gif)
![](https://github.com/saitoChen/excise/raw/master/gif/talk2.gif)  
### 环境依赖模块
	vue-cli
	vue2.0
	vue-router
	vuex
	axios
	express
	mongoose
	cors
### 运行程序
	开启数据库 => mongod --dbpath='路径'
	开启express => npm start
	开启vue => npm run dev
推荐使用[Robomongo](https://robomongo.org/)实现数据库可视化
### 电影数据
	选择豆瓣电影‘正在放映’的api作为电影数据源:http://api.douban.com/v2/movie/in_theaters
在vue/config/index.js中设置<br/>
![](https://github.com/saitoChen/excise/raw/master/gif/proxyTable.png)<br/>
在vue中可以直接通过`axios.get('/api/movie/in_theaters')`进行获取
### 后台跨域
由于我们搭建的vue-cli所在端口为8080，express端口为3000，因此想通过vue来获取服务端的数据也要进行跨域，这里我们使用cors模块

	在express中安装cors
	npm install cors --save
之后，在app.js中写下如下代码即可<br/>

	var cors = require('cors');
	app.use(cors({
		origin:['http://localhost:8000'],
    	methods:['GET','POST'],
    	alloweHeaders:['Conten-Type', 'Authorization']
	}))
