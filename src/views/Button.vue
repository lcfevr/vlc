<template>
    <div class="Button">
        <VButton type="primary">Primary</VButton>
        <VButton type="success" :loading="loading" @click="onClick">Success</VButton>
        <VButton type="warning" :loading="loading" @click.native="onClick">Warning</VButton>
        <VButton type="danger">Danger</VButton>
        <VButton type="normal">Normal</VButton>
        <VButton type="normal" disabled >Disabled</VButton>
    </div>
</template>

<script>
    import VButton from '../components/button'
    export default {
        name: "button",
        data(){
            return {
                loading:false
            }
        },
        components:{
            VButton
        },
        methods:{
            onClick(){
                this.loading = !this.loading
            }
        }
    }
</script>

<style lang="less" scoped>
    .Button {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
</style>