<template>
    <div class="vlc-tab" v-show="show" :style="getStyles">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <template v-if="/(http|https)/i.test(item.path)">
                    <a :href="item.path" :class="itemClass(item, index)">
                        <span v-html="getIconHtml(item, index)"></span>
                        <p>{{item.name}}</p>
                    </a>
                </template>
                <template v-else>
                    <router-link tag="a" :to="item.path" :class="itemClass(item, index)">
                        <slot name="item">
                            <span v-html="getIconHtml(item, index)"></span>
                            <p>{{item.name}}</p>
                        </slot>
                    </router-link>
                </template>
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        props: {
            items: Array,
            value: {
                type: Boolean,
                default: true
            },
            index: {
                type: [Number, String],
                default: 0
            },
            border: {
                type: Boolean,
                default: true
            },
            styles: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                show: this.value
            }
        },
        computed: {
            getStyles() {
                return Object.assign({}, {
                    borderTopWidth: this.border ? '1px' : '0px'
                }, this.styles)
            }
        },
        watch: {
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