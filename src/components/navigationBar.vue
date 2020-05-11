<template>
    <div id="navigation">
        <router-link v-for="(item,index) in navigateArr" :key="index" :to="item.path">{{item.text}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "navigationBar",
        data(){
            return{
                navigateArr:[{path:'/',text:'首页'},{path:'/one',text:'第一'},{path:'/two',text:'第二'}]
            }
        }
    }
</script>

<style scoped lang="less">
    #navigation {
        display: flex;
        height: 100px;
        align-items: center;
        > a {
            flex: 1;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
        }
    }
</style>