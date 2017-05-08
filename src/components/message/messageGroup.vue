<template>
    <div class="vlc-message-group" :style="styles">
        <Message v-for="message in messages"
                 :duration="message.duration"
                 :show-left="message.showLeft"
                 :right-hide="message.rightHide"
                 :name="message.name"
                 :type="message.type"
                 :text="message.text">

        </Message>
    </div>
</template>

<script>

    const prefixCls = 'vlc-message-group';

    import Message from './message.vue'

    export default {
        name:'MessageGroup',
        props:{
            styles:{
                type:Object,
                default:()=>{
                    return {
                        'top':'0',
                        'right':'50%'
                    }
                }
            }
        },
        data(){
            return {
                messages:[]
            }
        },
        methods:{
            add(props){
                let _prop = Object.assign({},{
                    text:'',
                    showLeft:false,
                    rightHide:true,
                    duration:1.5,

                },props);

                this.messages.push(_prop);
            },

            remove(name){
                console.log(this.messages)
                this.messages.forEach((item,index)=>{

                    if(item.name == name) {

                        let remove = this.messages.splice(index,1);
                        return remove;
                    }
                })
            }
        },
        components:{
            Message
        }
    }
</script>

<style>

    .vlc-message-group {
        position: fixed;
        right:0;
        width:200px;

    }
</style>