<template>
    <li :class="['tab-item-'+index]"  >
        <template v-if="!!item">
            <a v-link="{path:item.path}">
                <i v-html="item.icon" class="ifont"></i>
                <span>{{item.name}}</span>
            </a>
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
        ready(){

        }
    }
</script>
<style lang="less">

    .v-lc-tab .v-link-active {
        color: #db3652;

    }


</style>