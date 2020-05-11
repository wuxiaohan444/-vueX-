<template>
    <div id="navigation">
        <div v-for="(item,index) in navigateArr" :key="index">
            <router-link :to="item.path" :class="indexNum===index?'active':''">{{item.text}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigationBar",
        data() {
            return {
                navigateArr: [{path: '/', text: '首页'}, {path: '/one', text: '第一'}, {path: '/two', text: '第二'}],
                indexNum: .0
            }
        },
        created() {
            let path = this.$route.path;
            if (path === '/') {
                this.indexNum = 0;
            } else if (path === '/one') {
                this.indexNum = 1;
            } else if (path === '/two') {
                this.indexNum = 2;
            }
        }
    }
</script>

<style scoped lang="less">
    #navigation {
        display: flex;
        height: 100px;
        align-items: center;
        > div {
            flex: 1;
            height: 50px;
            line-height: 50px;
            display: flex;
            align-items: center;
            a{
                flex: 1;
            }
            .active {
                color: aqua;
                position: relative;
            }
            .active:after{
                position: absolute;
                content: '';
                display: block;
                width: 100px;
                height: 5px;
                background: aqua;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
</style>