<template>
	<div class="index">
		<ul>
			<li v-for='item in movie' class="movie-show">
				<a :href="item.alt">
					<img :src="item.images.large" class="avatar">
				</a>
				<h1 v-text="item.title" class="film-title"></h1>
				<div class="talk-wrap">
					<button @click="changeTalk(item.title)">畅谈</button>
				</div>
			</li>
			<li style="width:32%"></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
	export default{
		data () {
		  return {
		    subContent:false
		  }
		},
		computed: {
	      movie () {
	        return this.$store.state.movie
	      },
	      name () {
	      	return this.$store.state.name
	      }
	    },
		mounted () {
		  var that = this;
		  this.$nextTick(function(){
		    axios.get('/api/movie/in_theaters')
		    .then((res) => {//不适用es6箭头函数会报错=>movie undefined
		      this.$store.commit("add",res.data.subjects);
		    })
		    .catch((err) => {
		      console.log(err);
		    })
		  })
		},
		methods:{
			changeTalk (item) {
				this.$router.push({path:'/talk'});
				this.$store.commit("name",item);
			}
		}
	}
</script>
<style type="text/css">
	.index{
		position: relative;
	}
	.index ul{
		padding: 6px;
		display: flex;
		flex-flow:wrap;
		justify-content:space-between;
	}
	.movie-show{
		position: relative;
		width: 32%;
		height: 190px;
		background-color: #fff;
		margin-bottom: 6px;
		display: inline-block;
		box-shadow: 1px 1px 3px #888888;
	}
	.avatar{
		display: block;
		margin: 5px auto 0 auto;
		width: 95px;
		height: 120px;
		background-size: 100%;
	}
	.movie-show a {
		display: block;
	}
	.film-title{
		margin: 5px auto 0 auto;
		text-align: center;
		width: 95px;
		font-size: 12px;
		font-weight: 100;
	}
	.talk-wrap{
		position: absolute;
		bottom: 6px;
		left: 50%;
		margin-left: -25px;
	}
	.talk-wrap button{
		border:none;
		margin: 0 auto;
		background-color:rgb(28,134,238);
		border:none;
		outline:none;
		color: #fff; 
		width: 50px;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		text-align: center;
	}
</style>