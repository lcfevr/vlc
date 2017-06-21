<template>
    <div class="vlc-message-group" :style="styles">
        <Message v-for="(message,key) in messages" :key="message.name"
                 :duration="message.duration"
                 :show-left="message.showLeft"
                 :right-hide="message.rightHide"
                 :name="message.name"
                 :type="message.type"
                 :text="message.text"
                 :position="message.position">

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

                const messages = this.messages;

                messages.forEach((item,index)=>{
                    if(item.name===name){
                        this.messages.splice(index,1);

                    }
                })

            }
        },
        components:{
            Message
        }
    }
</script>