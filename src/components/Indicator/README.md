# Indicator

## 参数配置


props|type|default|destiption
---|---| ---|---
value|Boolean|false|显示/隐藏
color|String|'#ffffff'|字体颜色
type|String|'snake'|loading旋转的样式
size|[Number,String]|45|组件大小
text|String|'加载中...'|加载提示文字





## 说明

- 加载提示区域
- 依赖spinner组件
- 此组件为全局组件，可通过vue实例调用
- 通过==vm.$Indicator==调用相应方法（snake,blade,circle,bounce），可切换不同的loading动画
- 通过==vm.$Indicator.remove()==清空当前组件实例与dom







## 实例
```

        this.$Indicator.blade({
            text:'加载中'
        })


        setTimeout(()=>{

            this.$Indicator.remove()
        },2000)



```
