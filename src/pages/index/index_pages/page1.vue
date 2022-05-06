<template>
  <div class="page1">
    <div class="Applet_screenshot">
      <img :src="page1_img1" class="page1_img1" />
      <img :src="page1_img2" class="page1_img2" />
    </div>
    <div class="introduce">
      <img :src="page1_img3" class="page1_img3" />
      <div class="link">
        <button class="button_applet">
          <img :src="weichat" style="height: 65%" />
          <span>&nbsp; 微信小程序</span>
        </button>
        <button class="button_apple">
          <img :src="apple" style="height: 60%" />
          <span style="fontSize: 1.8vw">&nbsp; IOS</span>
          <span style="fontSize: 0.8vw">(即将发布)</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "index_page1",
  setup() {
    return {
      page1_img1: require("@/assets/page1_img1.png"),
      page1_img2: require("@/assets/page1_img2.png"),
      page1_img3: require("@/assets/page1_img3.png"),
      weichat: require("@/assets/微信.png"),
      apple: require("@/assets/苹果.png"),
    };
  },
});
</script>


<style scoped>
@import url("@/style/page.css");

img {
  pointer-events: none;
}

.Applet_screenshot {
  width: 18%;
  height: 80%;
  position: relative;
  left: 5%;
  display: flex;
  align-items: flex-end;
}
.Applet_screenshot .page1_img1 {
  /* height: 84%; */
  width: 92%;
  position: absolute;
  /* top: 8%; */
  right: 40%;
  z-index: 2;
}
.Applet_screenshot .page1_img2 {
  /* height: 92%; */
  width: 100%;
  position: absolute;
  left: 40%;
  z-index: 1;
}

.introduce {
  width: 50%;
  height: 90%;
  overflow: hidden;
  position: relative;
  left: 5%;
}
.introduce .page1_img3 {
  width: 100%;
  height: 83%;
  position: relative;
  left: 1vh;
}
.introduce .link {
  width: 90%;
  height: 15%;
  position: relative;
  /* bottom: 1%; */
  margin-left: 6.5%;
  display: flex;
}
.introduce button {
  width: 28%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: none;
  margin-right: 5%;
}
.introduce button:hover {
  cursor: pointer;
}
.introduce .link span {
  font-size: 1.3vw;
  color: white;
}
.introduce .link .button_applet {
  background-color: #70c268;
}
.introduce .link .button_apple {
  background-color: rgb(147, 147, 147);
}
</style>