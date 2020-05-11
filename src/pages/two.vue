<template>
    <div id="two">
        <h2>第二页面</h2>
        <div @click="back" class="button">返回</div>
        <p class="text">{{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "two",
        data() {
            return {
                id: ''
            }
        },
        created: function () {
            this.id = this.$route.query.id
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
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