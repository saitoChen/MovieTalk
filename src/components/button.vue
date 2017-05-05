<template>
	<div class="talk-wrap">
		<div class="talk">畅谈</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			movie:{
				type:Array
			}
		}
	}
</script>
<style type="text/css">
	.talk-wrap{
		position: absolute;
		bottom: 6px;
		left: 50%;
		margin-left: -25px;
	}
	.talk{
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