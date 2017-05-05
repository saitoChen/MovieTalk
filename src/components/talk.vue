<template>
	<div class="movie-talk-wrap">
		<div class="submit-talk">
			<textarea class="submit-content" v-model='subContent' v-bind:placeholder="'畅谈'+name"></textarea>
			<button @click='submitContent'>发布</button>
		</div>
		<div class="container-wrap">
			<ul id="container">
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default{
		data () {
			return{
				subContent:''
			}
		},
		computed: {
	      name () {
	      	return this.$store.state.name
	      }
	    },
		methods:{
			submitContent () {
				var ul = document.getElementById('container');
				var li = document.createElement("li");
				var title = document.createElement("h1");
				title.className = "con-name";
				var p1 = document.createElement("p");
				var p2 = document.createElement("p");
				p1.className = "author";
				p2.className = "con";
				li.appendChild(title);
				li.appendChild(p1);
				li.appendChild(p2);
				if (ul.children.length === 0) {
					ul.appendChild(li);
				}else{
					ul.insertBefore(li,ul.firstElementChild);
				}
				axios.post('http://localhost:3000/post',{
			      	post : this.subContent
	    		})
	       		.then((res)=>{
	        		p1.innerHTML = "--"+res.data.username;
	        		p2.innerHTML = res.data.post;
	        		title.innerHTML = "@"+this.name;
	        		this.subContent = '';
	   			 })
			}
		}
	}
</script>
<style type="text/css">
	.container-wrap ul{
		padding: 6px;
		display: flex;
		flex-flow:wrap;
		justify-content:space-between;
	}
	.container-wrap ul li{
		position: relative;
		width: 49%;
		height: 160px;
		background-color: #fff;
		margin-bottom: 6px;
		display: inline-block;
		box-shadow: 1px 1px 3px #888888;
	}
	.submit-talk{
		position: relative;
		width: 80%;
		height: 40px;
		margin:10px auto 10px auto;
	}
	.submit-content{
		position:absolute;
		width: 80%;
		height: 34px;
		resize: none;
		left: 0;
	}
	.submit-talk button{
		position: absolute;
		right: 0;
		border: none;
		height: 40px;
		color: #fff;
		background-color: rgb(28,134,238);
	}
	.con-name{
		display: inline-block;
		padding: 5px 0 5px 5px;
		margin-right: 10px; 
		font-size: 12px;
		color: rgb(28,134,238);
		font-weight: 100;
	}
	.con{
		font-size: 12px;
		padding: 0 5px 5px 5px; 
	}
	.author{
		display: inline-block;
		font-size: 12px;
		color: rgb(28,134,238);
	}
</style>