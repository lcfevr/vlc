<template>
    <div class="vlc-tab" v-show="show" :style="border ? borderStyle : ''">
        <ul>
            <router-link tag="li" v-for="(item, index) in items" :key="index" :to="item.path" :class="itemClass(item, index)">
                <slot name="item">
                    <div v-html="getIconHtml(item, index)"></div>
                    <p>{{item.name}}</p>
                </slot>
            </router-link>
        </ul>
    </div>
</template>

<script>

    export default {
        props:{
            items: Array,
            value: {
                type:Boolean,
                default:true
            },
            index: {
                type: [Number, String],
                default: 0
            },
            border: {
                type:Boolean,
                default:true
            }
        },
        data(){
            return {
                show:this.value
            }
        },
        computed: {
            borderStyle() {
                return {
                    borderTopWidth: '1px'
                }
            }
        },
        watch:{
            value(val){
                this.show = val
            }
        },
        methods: {
            itemClass(item, index) {
                var _class = [
                    'tab-item-' + index
                ];

                if (this.index == index) _class.push('cur');

                return _class;
            },
            getIconHtml(item, index) {
                if (this.index == index) {
                    return item.iconCur || item.icon;
                } else {
                    return item.icon;
                }
            }
        }
    }

</script>