<template>
    <div id="one">
        <navigationBar></navigationBar>
        <h1>第一页面</h1>
    </div>
</template>

<script>
    import navigationBar from '../components/navigationBar'
    export default {
        name: "one",
        components:{navigationBar},
        data() {
            return {}
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    #one {
        text-align: center;
    }
</style>