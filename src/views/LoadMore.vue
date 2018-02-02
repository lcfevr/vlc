<template>
    <div class="LoadMore">
        <LoadMore :refresh="topMethod" height="100%" ref="more" :load-more="bottomMethod" :has-more="hasMore"
                   @on-change-up-status="getStatus">
            <div style="width: 100%;height: 50px;" v-for="item in loadmore">{{item}}</div>
        </LoadMore>
    </div>

</template>

<script>

    export default {
        name: "load-more",
        data(){
            return {
                hasMore:true,
                loadmore:['LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore','LoadMore']
            }
        },
        methods:{
            topMethod(){
                this.loadMore = ['LoadMore','LoadMore']

                setTimeout(()=>{
                    this.$refs.more.onLoadOff();
                },2000)
                this.hasMore = true;
            },
            bottomMethod(){

                setTimeout(()=>{
                    this.$refs.more.onLoadOff();
                    this.loadmore.push(...['LoadMore','LoadMore']);

                },2000)


            },
            getStatus(val){
                console.log(val)
            },
        }

    }
</script>

<style lang="less" scoped>
    .LoadMore {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>