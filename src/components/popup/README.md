# Popup
## 参数配置
props| type | default | description
---|---|---|---
value| Boolean |false|显示/隐藏
position|String |'bottom' (bottom,top,left,right)|组件进入的位置
styles|Object |{}|自定义行内样式
showMask |Boolean |true|是否显示遮罩
maskClosable|Boolean |true|是否允许点击遮罩隐藏组件
width|[Number,String] |'100%'|宽度
height|[Number,String] |none|高度

## slot

name | description
---|---
none | 主体内容插值


## 说明
- 一个弹出层，可自定义主体内容
- 通过配置position可以实现组件从屏幕的不同方向移入窗口，默认从屏幕下方移入
- 若不传入height属性，在position属性值为'top'时，组件的height会被修改为'auto'

```
<Popup v-model="visible" :show-mask="showMask" :position="position"></Popup>
```

```
export default {
    data(){
        return {
            visible:true,
            showMask:true,
            position:'left'
        }
    }
}
```