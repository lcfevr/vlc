<template>
    <div class="v-lc-notifaction" :style="styles">
        <notice
                 :key="notice.name"
                 :styles="notice.styles"
                :content="notice.content"
                :duration="notice.duration"
                :closable="notice.closable"
                :transition-name="notice.transitionName"
                :on-close="notice.onClose"
                v-for="notice in notices"></notice>
    </div>
</template>

<script>
    let now = Date.now();
    let seed = 0;
    function getUuid(){
        return 'v_notifaction_'+now+'_'+(seed++)
    }
    import Notice from './notice.vue'
    export default {
        components:{
            Notice
        },
        props:{
            styles:{
                type:Object,
                default(){
                    return {
                        top:'.5rem',
                        right:'50%'
                    }
                }
            },
            content:{
                type:String,
                default:''
            },
        },
        computed:{


        },
        data(){
            return {
                notices:[]
            }
        },
        methods:{
            add(notice){

                const name = notice.name || getUuid();

                let _notice = Object.assign({
                    styles:{
                        right:'50%'
                    },
                    content:'',
                    duration:1.5,
                    name:name,
                    closable:false,
                },notice);

                this.notices.push(_notice);
                console.log(this.notices)
            },
            remove(name){

                const notices = this.notices;

                for (let i = 0;i<notices.length;i++) {

                    if(notices[i].name === name) {
                        this.notices.splice(i,1);
                        break;
                    }
                }
            }
        }
    }
</script>