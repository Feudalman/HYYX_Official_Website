<template>
  <div class="foot">
    <div class="toes">
      <div class="toe">
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="toe"></div>
      <a href="https://beian.miit.gov.cn/" class="toe">
        西安焕视灵智科技有限公司 - 陕ICP备2022003347号
      </a>
      <div class="toe" v-for="item in toes" key="item">{{ item }}</div>
    </div>
  </div>
</template>

<style scoped>
@import url("./my_foot.css");
</style>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MyFoot",
  setup() {
    return {
      toes: ["联系邮箱：xiaolin199912@163.com"],
    };
  },
});
</script>
