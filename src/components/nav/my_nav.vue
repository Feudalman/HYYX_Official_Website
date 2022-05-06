<template>
  <nav class="my_nav">
    <div class="left">
      <img :src="logo" @click="hello">
      <img :src="name" >
    </div>
    <div class="right">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
  </nav>
</template>

<style scoped>
@import url("./my_nav.css");
</style>

<script>
import { defineComponent } from "@vue/composition-api";

function hello(){
  console.log("hello");
}

export default defineComponent({
  name: "my_nav",
  setup() {
    return{
      logo:require("@/assets/logo.png"),
      name:require("@/assets/name.png"),
      hello
    }
  },
});
</script>
