<template>
  <div class="page">
    <div class="title">
      <img :src="title" />
    </div>
    <div class="about_us">
      <div class="container">
        <h1>关于我们</h1>
        <div class="text_introduce">
          <p v-html="text_intro"></p>
        </div>
        <div class="link">
          <h1>关注我们</h1>
          <div class="follows">
            <div class="follow" v-for="item in test_list" key="item.follow_title">
              <img :src="item.img">
              <div class="follow_title">
                {{item.follow_title}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="screemshot">
        <img :src="screemshot1" class="screemshot1">
        <img :src="screemshot2" class="screemshot2">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/reactivity";

const test_list = ref([
  {
    img:require("@/assets/logo.png"),
    follow_title:"公众号"
  },
  {
    img:require("@/assets/logo.png"),
    follow_title:"服务号"
  }
])

export default defineComponent({
  name: "about",
  setup() {
    return {
      title: require("@/assets/title.png"),
      screemshot1:require("@/assets/page1_img1.png"),
      screemshot2:require("@/assets/page1_img2.png"),
      test_list,
      text_intro: `<p>欢迎使用焕影一新小程序~</p>
      <p>团队成员均来自西安电子科技大学。</p>
      <p>学长们都太牛了。</p>`,
    };
  },
});
</script>

<style scoped>
@import url("./about.css");
</style>