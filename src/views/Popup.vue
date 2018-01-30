
<template>
    <div class="Popup">
        <VButton width="50%" @click.native="showPop('top')">
            Top
        </VButton>
        <VButton width="50%" @click.native="showPop('right')">
            Right
        </VButton>
        <VButton width="50%" @click.native="showPop('bottom')">
            Bottom
        </VButton>
        <VButton width="50%" @click.native="showPop('left')">
            Left
        </VButton>


        <Popup v-model="show" :position="side" :width="width" :height="height" show-mask="">

        </Popup>
    </div>
</template>

<script>

    export default {
        name: "popup",
        data(){
            return {
                side:'top',
                show:false,
                sideList:['top','right','bottom','left'],
                width:'100%',
                height:'100%'
            }
        },

        methods:{
            showPop(side){
                this.show = false
                this.$nextTick(()=>{

                    if (this.sideList.indexOf(side) < 0) side = 'top'

                    switch (side){
                        case 'top':
                            this.width = '100%'
                            this.height = 0
                            break
                        case 'right':
                            this.width = '70%'
                            this.height = '100%'
                            break
                        case 'bottom':
                            this.width = '100%'
                            this.height = '70%'
                            break;
                        case 'left':
                            this.width = '70%'
                            this.height = '100%'
                            break
                    }


                    this.side = side


                    setTimeout(()=>{
                        this.show = true
                    },350)
                })

            }
        }
    }
</script>

<style scoped>

    .Popup {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
</style>