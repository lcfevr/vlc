## Rater组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

     id                       String                none            组件Id,唯一值

    value                     Boolean               false           控制开关,通过v-model绑定


    size                      String                'small'          组件的大小，仅接收'small' 'large'




##说明

- 评分组件
- 可自由设置分数最大值，设置初始值，支持半星显示



```
<template>
    <div class="Rater">
        <p>可点击评分</p>
        <Rater v-model="rate"></Rater>
        <span>{{rate}}</span>
        <p>不可点击评分</p>
        <Rater v-model="disabledRate" disabled></Rater>
        <span>{{disabledRate}}</span>
    </div>
</template>

<script>
    export default {
        name: "rater",
        data(){
            return {
                rate:0,
                disabledRate:4.5
            }
        }
    }
</script>
```
