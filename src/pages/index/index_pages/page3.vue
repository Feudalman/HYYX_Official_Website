<template>
  <div class="page">
    <div class="page_title">
      <img :src="page3_title" />
    </div>
    <div class="page_main">
      <div class="item item_left">
        <div class="img23_block">
          <img :src="page3_img2" />
        </div>
      </div>
      <div class="item item_middle">
        <div class="img1_block">
          <div class="img">
            <img :src="page3_img1" style="height: 100%" />
          </div>
        </div>
      </div>
      <div class="item item_right">
        <div class="img23_block">
          <img :src="page3_img3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 102%;
  width: 100%;
  background-color: rgb(244, 244, 244);
  display: flex;
  justify-content: center;
  pointer-events: none;
  flex-wrap: wrap;
}

.page .page_title {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.page .page_title img {
  height: 65%;
}

.page .page_main {
  width: 85%;
  height: 70%;
  display: flex;
  justify-content: space-around;
}

.page .page_main .item {
  width: 30%;
  height: 90%;
  display: flex;
}

.page .page_main .item .img23_block {
  height: 15%;
  display: inline-block;
  padding: 1% 2%;
  background: white;
  border-radius: 10px;
}

.page .page_main .item .img23_block img {
  height: 100%;
  max-width: 100%;
}

.page .page_main .item_left {
  align-items: center;
  justify-content: right;
}

.page .page_main .item_right {
  align-items: flex-end;
}

.page .page_main .item_middle {
  justify-content: center;
  align-items: center;
}

.page .page_main .item_middle .img1_block {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0% 5%;
  background-color: rgb(255, 255, 255);
  border: 3px solid #d9d9d9;
}

.page .page_main .item_middle .img1_block .img {
  height: 93%;
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #d9d9d9;
}
</style>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "IndexPage3",
  setup() {
    return {
      page3_title: require("@/assets/page3_title.png"),
      page3_img1: require("@/assets/page3_img1.png"),
      page3_img2: require("@/assets/page3_img2.png"),
      page3_img3: require("@/assets/page3_img3.png"),
    };
  },
});
</script>
