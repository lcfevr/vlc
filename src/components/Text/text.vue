<template>
    <div class="vlc-text">
        <input type="text" v-model="value" />
    </div>
</template>

<script>


    export default {
        props:{
            value:{
               type:[String,Number]
            },
        },
        data(){
            return {

            }
        }
    }
</script>