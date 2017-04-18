<template>
    <div class="v-lc-notifaction" :style="styles">
        <notice v-for="notice in notices"
                 :key="notice.key"
                 :styles="notice.styles"
                :content="notice.content"
                :duration="notice.duration"
                :closable="notice.closable"
                :transition-name="notice.transitionName"
                :on-close="notice.onClose"
                ></notice>
    </div>
</template>

<script>
    let now = Date.now();
    let seed = 0;
    function getUuid(){
        return 'v_notifaction_'+now+'_'+(seed++)
    }
    import notice from './notice.vue'
    export default {
        components:{
            notice
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

                const name = notice.key || getUuid();
                let _notice = Object.assign({
                    styles:{
                        right:'50%'
                    },
                    content:'',
                    duration:1.5,
                    key:name,
                    closable:false,
                },notice);

                this.notices.push(_notice);
                console.log(this.notices)
            },
            close(name){

                const notices = this.notices;

                for (let i = 0;i<notices.length;i++) {

                    if(notices[i].key === name) {

                        this.notices.splice(i,1);
                        break;
                    }
                }
            }
        }
    }
</script>