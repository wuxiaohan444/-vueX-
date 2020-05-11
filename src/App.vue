<template>
    <div id="app">
        <navigationBar></navigationBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import navigationBar from './components/navigationBar'
    export default {
        name: 'App',
        components:{navigationBar},
    }
</script>

<style lang="less">
    *{
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: #333;
    }
</style>
