<template>
    <div class="page">
        <div class="page4_title page_item">
            <img :src="page4_title" alt="">
        </div>
        <div class="page4_button page_item">
            <button>立 即 体 验</button>
        </div>
        <div class="page4_links page_item">
            <div class="link" v-for="item in links">
                <div class="QR_code">
                    <img :src="item.src">
                </div>
                <div class="QR_name">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("@/style/page.css");

.border{
    border: 1px solid black;
}

.page_item{
    display: flex;
    justify-content: center;
    align-items: center;
}

.page4_title{
    width: 100%;
    height: 17.5%;
}

.page4_title img{
    height: 100%;
}

.page4_button{
    width: 100%;
    height: 25%;
}

.page4_button button{
    background-color: #70C268;
    height: 50%;
    padding: 0% 6%;
    font-size: 2vw;
    border: none;
    color: white;
    border-radius: 20px;
}

.page4_links{
    width: 100%;
    height: 50%;
}

.page4_links .link{
    height: 100%;
    /* width: 20%; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.page4_links .link .QR_code{
    height: 70%;
    border-radius: 50%;
    overflow: hidden;
    width: auto;
}

.page4_links .link .QR_code img{
    height: 100%;
}

.page4_links .link .QR_name{
    width: 100%;
    text-align: center;
    font-size: 1.2vw;
}

</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name:"IndexPage4",
    setup() {
        return{
            page4_title:require("@/assets/page4_title.png"),
            links:[
                {
                    text:"微信小程序",
                    src:require("@/assets/小程序.jpg")
                },
                // {
                //     text:"微信小程序",
                //     src:require("@/assets/小程序.jpg")
                // },
                // {
                //     text:"微信小程序",
                //     src:require("@/assets/小程序.jpg")
                // }
            ]
        }
    },
})
</script>
