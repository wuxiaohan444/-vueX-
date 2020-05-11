<template>
    <div id="one">
        <h1>第一页面</h1>
        <!--<router-link to="/two">点击跳转two</router-link>-->
        <div class="button" @click="skip">点击跳转</div>
    </div>
</template>

<script>
    export default {
        name: "one",
        data() {
            return {}
        },
        methods: {
            skip() {
                this.$router.push({
                    path: '/two',
                    query: {
                        id: 1
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #one {
        text-align: center;
        .button {
            width: 100px;
            height: 20px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            background: aqua;
            border-radius: 6px;
            cursor: pointer;
            margin: 0 auto;
        }
    }
</style>