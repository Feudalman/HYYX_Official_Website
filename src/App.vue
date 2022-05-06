<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyNav from "./components/nav/my_nav.vue";
import MyFoot from "./components/foot/my_foot.vue"

export default {
  name: "App",
  components: {
    MyNav,
    MyFoot
  },
  setup(){
    return{

    }
  },
  mounted(){
    console.log(window);
  }
};
</script>

<style lang="less">
@import url("./style/scroll.css");
@import url("./style/page.css");

* {
  margin: 0;
  padding: 0;
  user-select:none;
}

html{
  height: 100%;
}

body{
  min-width: 1360px;
}

#app {
  height: 100vh;
  width: 100%;
  min-height: 900px;
} 
</style>
