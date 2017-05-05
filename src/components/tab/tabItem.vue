<template>
    <li :class="['tab-item-'+index]"  >
        <template v-if="!!item">
            <router-link :to="{path:item.path}">
                <i v-html="item.icon" class="ifont"></i>
                <span>{{item.name}}</span>
            </router-link>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </li>


</template>
<script>

    export default {
        props:{
            item:{
                type:Object,
                default:() =>{}
            },
            index:[String,Number]
        },
        computed:{

        },
        data(){
            return {

            }
        },
        methods:{

        },
        components:{

        },
    }
</script>
<style lang="less">

    .v-lc-tab .router-link-active {
        color: #db3652;

    }


</style>