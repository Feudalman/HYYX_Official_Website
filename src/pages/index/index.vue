<template>
  <index-page-1></index-page-1>
  <index-page-2></index-page-2>
  <index-page-3></index-page-3>
  <index-page-4></index-page-4>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import IndexPage1 from "./index_pages/page1.vue";
import IndexPage2 from "./index_pages/page2.vue";
import IndexPage3 from "./index_pages/page3.vue";
import IndexPage4 from "./index_pages/page4.vue";

export default defineComponent({
  name: "index",
  components:{
    IndexPage1,
    IndexPage2,
    IndexPage3,
    IndexPage4,
  },
  setup() {
    return {
    };
  },
});
</script>
