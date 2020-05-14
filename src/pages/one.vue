<template>
    <div id="one">
        <navigationBar></navigationBar>
        <div class="head">
            <div :class="defaultIndex===0?'menu':defaultIndex===1?'menu active':'menu restore'" @click="rouseMenu">
                <div class="menu-one"></div>
                <div class="menu-two"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import navigationBar from '../components/navigationBar'

    export default {
        name: "one",
        components: {navigationBar},
        data() {
            return {
                defaultIndex: 0
            }
        },
        methods: {
            rouseMenu() {
                if (this.defaultIndex === 0) {
                    this.defaultIndex = 1;
                } else if (this.defaultIndex === 1) {
                    this.defaultIndex = 2;
                } else if (this.defaultIndex === 2) {
                    this.defaultIndex = 1;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #one {
        height: 100%;
        width: 100%;
    }

    .head {
        width: 100%;
        height: 50px;
        background: rgba(0, 0, 0, .8);
        position: absolute;

        .menu {
            height: 40px;
            width: 40px;
            position: relative;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            /*border: 1px solid #863587;*/
            animation: 0.7s restore forwards;

            .menu-one, .menu-two {
                position: absolute;
                width: 40px;
                height: 3px;
                background: aliceblue;
            }

            .menu-one {
                top: 10px;
            }

            .menu-two {
                bottom: 10px;
            }
        }

        .menu.active {
            animation: 0.7s nextRight forwards;

            .menu-one {
                animation: 0.7s nextTop forwards;
            }

            .menu-two {
                animation: 0.7s nextBottom forwards;
            }
        }

        .menu.restore {
            animation: 0.7s nextRightRestore forwards;

            .menu-one {
                animation: 0.7s nextTopRestore forwards;
            }

            .menu-two {
                animation: 0.7s nextBottomRestore forwards;
            }
        }

        @keyframes nextRight {
            0% {
                transform: translateX(0) translateY(-50%) rotateZ(0deg);
            }
            100% {
                transform: translateX(200px) translateY(-50%) rotateZ(45deg);
            }
        }
        @keyframes nextTop {
            0% {
                transform: translateY(0px);
            }
            100% {
                transform: translateY(9px);
            }
        }
        @keyframes nextBottom {
            0% {
                transform: rotateZ(0) translateX(0px) translateY(0px);
            }
            100% {
                transform: rotateZ(-90deg) translateX(8px) translateY(-1px);
            }
        }

        @keyframes nextRightRestore {
            0% {
                transform: translateX(200px) translateY(-50%) rotateZ(45deg);
            }
            100% {
                transform: translateX(0) translateY(-50%) rotateZ(0deg);
            }
        }
        @keyframes nextTopRestore {
            0% {
                transform: translateY(9px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        @keyframes nextBottomRestore {
            0% {
                transform: rotateZ(-90deg) translateX(8px) translateY(-1px);
            }
            100% {
                transform: rotateZ(0) translateX(0px) translateY(0px);
            }
        }
    }
</style>