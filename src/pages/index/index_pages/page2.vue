<template>
  <div class="page page2">
    <!-- <div style="width: 100%"> -->
      <div class="page2_title">
        <img :src="page2_title" />
      </div>
    <!-- </div> -->
    <div class="page2_screemshot" v-for="item in screemshots" key="item.text">
      <!-- <img :src="item.src" class="screemshots"> -->
      <div class="screemshots">
        <img :src="item.src" />
      </div>
      <p>{{ item.text }}</p>
    </div>
    <div class="page2_screemshot" id="screemshot_right">
      <div class="screemshots_2">
        <img :src="page2_img34" />
        <p>赠送6寸电子排版照</p>
      </div>
      <div class="screemshots_2" id="SS2_bottom">
        <img :src="page2_img5" style="height: 73%" />
        <p id="SS2_text">标准与高清兼得</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/page.css");

.page2 {
  display: flex;
  flex-wrap: wrap;
  /* min-width: 1900px; */
}

.page2 .page2_title {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  padding-left: 0.3%;
  position: relative;
  bottom: 2.5%;
  /* border: 1px solid black; */
}

.page2 .page2_screemshot {
  width: 22%;
  justify-content: center;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px solid black; */
}

.page2 p {
  width: 100%;
  text-align: center;
  font-size: 1.2vw;
}

.page2 .page2_screemshot .screemshots {
  height: 90%;
  border-radius: 10px;
  border: 3px solid rgb(220, 216, 216);
  overflow: hidden;
}

.screemshots img {
  height: 101.5%;
}

.page2 .page2_screemshot .screemshots_2 {
  height: 50%;
}

.page2 .page2_screemshot .screemshots_2 img {
  height: 70%;
}

#SS2_bottom {
  position: relative;
  top: 4.5%;
}

#SS2_text {
  position: relative;
  top: 2%;
}
</style>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "index_page2",
  setup() {
    return {
      page2_title: require("@/assets/page2_title.png"),
      screemshots: [
        {
          text: "500+尺寸选择",
          src: require("@/assets/page2_img1.jpg"),
        },
        {
          text: "标准证件照制作",
          src: require("@/assets/page2_img2.jpg"),
        },
      ],
      page2_img34: require("@/assets/page2_img34.png"),
      page2_img5: require("@/assets/page2_img5.png"),
    };
  },
});
</script>
