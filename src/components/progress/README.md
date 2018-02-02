# Progress

## 参数配置


props| type | default | description
---|---|---|---
styles| Object |{}|自定义样式
value|[Number,String] |0 |当前进度值
barHeight|[String,Number] |3|进度条高度




## 说明

- value可用v-model绑定
- 通过动态修改value的值完成进度条效果




```
<template>
    <div class="Progress">
        <Progress v-model="progress" :barHeight="barHeight"></Progress>
    </div>
</template>

<script>
    export default {
        name: "progress",
        data(){
            return {
                progress:0,
                barHeight:5
            }
        },
        mounted(){
            var timer = setInterval(()=>{
                this.progress+= 1
                if (this.progress >= 100)  {
                    clearInterval(timer)
                    time = null
                }
            },100)
        }
    }
</script>
```


