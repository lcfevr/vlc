<template>
    <div clas="SlideBar">
        <Slide-bar :list="items" :flex="false" index="1" :can-drag="false" height="100%" scroll-height='50px'
                   :is-fixed-header="true">

            <div slot="slot-item-0" style="height:100%;flex: 1;background:red;overflow: scroll">
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
            </div>
            <div slot="slot-item-1" style="height:200px;flex: 1;background:yellow">

            </div>
            <div slot="slot-item-2" style="height:200px;flex: 1;background:black"></div>
        </Slide-bar>
    </div>
</template>

<script>
    export default {
        name: "slide-bar",
        data(){
            return {
                items:[{

                    name: "选项一",

                }, {
                    name: "选项二",

                }, {
                    name: "选项三",

                }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .SlideBar {
        width: 100%;
    }
</style>