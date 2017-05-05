<template>
	<div class="me">
		<div class="login" v-show="loginShow">
			<label><span style="position:absolute; top:50px;">用户名:</span><input v-model="loginAccount" class="login-account"></input></label>
		    <br/>
		    <span v-show="notreg" id="notreg" class="unreg"></span>
		    <label><span  style="position:absolute; top:100px;">密码:</span><input v-model="loginPassword" class="login-password"></input></label>
		    <br/>
		    <button @click="login">登录</button>
		    <div class="tabReg" @click="change">新用户注册</div>
		</div>
		<div class="regin" v-show="reginShow">
			<label><span style="position:absolute; top:50px;">新用户:</span><input v-model="account" class="regin-account"></input></label>
		    <br/>
		    <span v-show="alreadyreg" id="areg" class="areg"></span>
		    <label><span  style="position:absolute; top:100px;">新密码:</span><input v-model="password" class="regin-password"></input></label>
		    <br/>
		    <button @click="regin">注册</button>
		    <button @click="back" class="back">返回</button>
		</div>
		<div class="welcome" v-show="welcomeShow">
			<h1>欢迎<span v-text="name"></span></h1>
			<p>来到影谈</p>
			<button @click="logout">登出</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default{
		data () {
			return{
				loginAccount:'',
				loginPassword:'',
				account:'',
				password:'',
				name:'',
				alreadyreg:false,
				notreg:false,
				loginShow:true,
				reginShow:false,
				welcomeShow:false
			}
		},
		methods:{
			change () {
				this.loginShow = false;
				this.reginShow = true;
				this.loginAccount = '';
				this.loginPassword = '';
				this.account = '';
				this.password = '';
				this.name = '';
				this.notreg = '';
			},
			back () {
				this.loginShow = true;
				this.reginShow = false;
				this.loginAccount = '';
				this.loginPassword = '';
				this.account = '';
				this.password = '';
				this.name = '';
				this.notreg = '';
				this.alreadyreg = '';
			},
			//注册
			regin () {
				var areg = document.getElementById('areg')
				var input = document.getElementsByClassName('regin-account')[0];
				var that = this;
			    axios.post('http://localhost:3000',{
			    	account:this.account,
			        password:this.password
			    })
			    //必须使用es6，否则会报错
	      		.then((res)=>{
	      			if (res.data == 0) { //返回0意味着已被注册
	      				areg.innerHTML = "用户名已被注册";
	      				that.alreadyreg = true;
	      				return 
	      			}else if(res.data == 1){ //返回1意味着用户名为空
	      				areg.innerHTML = "用户名不能为空";
	      				that.alreadyreg = true;
	      			}else{
	      				this.welcomeShow = true;
		        		this.reginShow = false;
		        		this.name = res.data.account;
	      			}
	      		})
			    this.account = ''
			    this.password = ''
	    	},
	    	//登录
	    	login () {
	    		var not = document.getElementById('notreg')
	    		var that = this;//axios的catch获取不到this,需要保存this环境      
		    	axios.post('http://localhost:3000/login',{
			      	account:this.loginAccount,
			        password:this.loginPassword
		     	})
		       .then((res)=>{
		        	this.name = res.data[0].account;
		       		this.welcomeShow = true;
	        		this.loginShow = false;
		      	})
		       .catch(function(error){
		       		not.innerHTML = "用户未注册,请注册";
		       		that.notreg = true;
		       		that.loginAccount = '';
					that.loginPassword = '';
			  });
			    this.loginAccount = ''
			    this.loginPassword = ''
		    },
		    //登出
		    logout () {
	    		axios.get('http://localhost:3000/logout')
	       		.then((res)=>{
	       			this.welcomeShow = false;
	       			this.loginShow = true;
	       			this.loginAccount = '';
			   	 	this.loginPassword = '';
			   	 	this.account = '';
			    	this.password = '';
	      		})
	    	}
		}
	}
</script>
<style type="text/css">
	.login,.regin,.welcome{
		position: relative;
		width: 80%;
		height: 400px;
		margin: 0 auto;
		font-size:12px; 
	}
	.welcome{
		margin-top: 50px;
	}
	.login-account,.regin-account{
		position: absolute;
		top: 50px;
		right: 0;
		width: 80%;
	}
	.login-password,.regin-password{
		position: absolute;
		top: 100px;
		right: 0;
		width: 80%;
	}
	.login button,.regin button,.welcome button{
		position: absolute;
		top: 150px;
		border: none;
		color: #fff;
		background-color: rgb(28,134,238);
	}
	.back{
		left: 50px;
	}
	.tabReg{
		position: absolute;
		top: 150px;
		left: 80px;
	}
	.unreg,.areg{
		position: absolute;
		top: 78px;
		left: 60px;
		color: red;
	}
</style>