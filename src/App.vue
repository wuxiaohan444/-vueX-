<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        mounted() {
            // if (this._isMobile()) {
            //     // 手机端
            //     this.$router.replace('/one');
            // } else {
            //     //pc端
            //     this.$router.replace('/index');
            // }
        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            }
        }
    }
</script>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }

    html, body, #app {
        text-align: center;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    /*轮播图分页器修改颜色*/
    .swiper-pagination-bullet-active {
        background-color: #52B54B !important;
    }

    /*轮播图前进后退按钮*/
    .swiper-button-prev, .swiper-button-next {
        color: #52B54B !important;
    }
</style>
