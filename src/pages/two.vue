<template>
    <div id="two">
        <navigationBar></navigationBar>
        <h2>第二页面</h2>
    </div>
</template>

<script>
    import navigationBar from '../components/navigationBar'

    export default {
        name: "two",
        components: {navigationBar},
        data() {
            return {
                id: ''
            }
        },
        created: function () {

        },
        methods: {}
    }
</script>

<style scoped lang="less">
    #two {
        .button {
            width: 30px;
            height: 20px;
            background: aqua;
            border-radius: 10px;
            font-size: 12px;
            margin: 0 auto;
            cursor: pointer;
        }

        .text {
            color: aqua;
            text-align: center;
        }
    }
</style>