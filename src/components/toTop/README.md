# ToTop

## 参数配置

props| type | default | description
---|---|---|---
distance| Number |300|定义显示组件的滚动条距离
bottom|[Number,String] |30 |定义组件距离底部fix定位位置
right|[String,Number] |30|定义组件距离右边的fix定位位置
duration|Number |1000|定义动画时间 毫秒级




## 说明

- 回到顶部功能组件
- 通过监听浏览器scroll事件与resize事件执行scroll方法使浏览器滚动条逐步归零






```
    <template>
        <ToTop :distance="distance" :duration="duration"></ToTop>
    </template>


    export default {

        data(){
            return {
                distance:200,
                duration:2000
            }
        }
    }
```