<template>
    <span :class="classes" >
        <slot></slot>
        <sup v-show="visible" :class="supClasses">{{count}}</sup>
    </span>
</template>

<script>

    const prefixCls = 'vlc-badge';
    export default {
        name: 'Badge',
        props: {
            type: {
                type: String,
                default: 'danger',
                validator(val){
                    return ['normal','danger','warning','success'].indexOf(val) > -1
                }
            },
            color: {
                type: String,
                default: '#ffffff'
            },
            size: {
                type: String,
                default: 'normal',
                validator(val){
                    return ['small','normal','large'].indexOf(val) > -1
                }
            },
            dot: {
                type: Boolean,
                default: false
            },
            max: {
                type: [Number,String],
                default: 99
            },

            number:[Number,String]
        },
        data(){
            return {
                visible:true,
            }

        },

        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            supClasses(){
                return [
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-size-${this.size}`]:!this.dot,
                        [`${prefixCls}-dot`]:this.dot
                    }

                ]
            },
            count(){
                if (!!this.number && !isNaN(Number(this.number)) && !this.dot) {
                    return  Number(this.number) < Number(this.max) ? String(this.number) : String(this.max) + '+'
                } else if(!this.dot){
                    this.visible = false;
                    return ''
                }
            }
        }

    }
</script>