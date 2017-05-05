<template>
  <div id="app">
    <header>
      <headername></headername>
    </header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/index">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/talk">畅谈</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/me">我的</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import headername from './components/headername.vue'
export default {
  name: 'app',
  components: {
    headername
  }
}
</script>

<style>
.tab{
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(28,134,238);
}

.tab-item{
  flex: 1;
  text-align: center;
}
.tab-item a{
  color: #fff;
}
.router-link-active{
  font-weight: 800;
}
a{
  text-decoration: none;
  color: #fff;
}
</style>
