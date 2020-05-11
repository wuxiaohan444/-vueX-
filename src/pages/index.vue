<template>
    <div id="index" @scroll="onScroll" ref="index" style="overflow-x:hidden">
        <navigationBar></navigationBar>
        <!--轮播图-->
        <div class="swiper-container">
            <!--上一个图片按钮-->
            <div class="swiper-button-prev"></div>
            <!--下一个图片按钮-->
            <div class="swiper-button-next"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in slideList" :key="index">
                    <img :src="item.url" alt="">
                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import navigationBar from '../components/navigationBar'

    export default {
        name: "index",
        components: {navigationBar},
        data() {
            return {
                slideList: [
                    {url: require('../assets/images/01.jpg')},
                    {url: require('../assets/images/02.jpg')}
                ]
            }
        },
        mounted() {
            this.initSwiper()
        },
        methods: {
            initSwiper() {
                new Swiper('.swiper-container', {
                    loop: true,
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper
                    autoplay: {
                        disableOnInteraction: false,   // 手动滑动后继续自动播放
                    },
                    speed: 500,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    //前进后退按钮
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
            },
            onScroll() {
                let c = this.$refs.index.scrollTop;
                if (c > 600) {
                    console.log(c);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../node_modules/swiper/css/swiper.css";

    #index {
        height: 100%;
        overflow: scroll;
        .swiper-container {
            width: 80%;
            height: 500px;

            img {
                width: 100%;
                height: 500px;
            }

        }
    }
</style>