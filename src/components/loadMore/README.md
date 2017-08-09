# Loadmore
## 参数配置


props|type|default|destiption
---|---| ---|---
height|[Number, String]|'100%'|组件高度
refresh|Function|none|下拉执行的方法
upLoadingText|String|'加载中...'|下拉完成后松开执行refresh方法显示的文本
upDistance|Number|70|下拉临界值
upPullText|String|'↓ 下拉刷新'|下拉时距离小于upDistance时显示的文本
upDropText|String|'↑ 释放更新'|下拉时距离大于upDistance时显示的文本
maxDistance|Number|0|下拉允许的最大距离，为0时没有限制
speed|Number|3|下拉速度，数值越大下拉越慢
downEndText|String|'没有更多了'|hasMore为false时显示的文本
downDropText|String|'↑ 下拉加载数据'|上拉时显示默认文本
downLoadingText|String|'加载中...'|上拉完成后执行的loadmore方法显示的文本
downDistance|Number|50|离滚动条底部距离小于该值时触发加载方法
loadMore|Function|none|上拉加载方法
hasMore|Boolean|true|是否有更多数据，为false时不再触发loadmore方法
styles|Object|{}}|自定义样式
auto|Boolean|true|是否在组件初始化时自动加载
autoFill|Boolean|true|是否在数据不满一屏时自动加载

## slot
name | description
---|---
top | 顶部html模板插值
none | 主体内容插值
bottom | 底部html模板插值


## 说明

- 下拉/上拉刷新
- 当==refresh==方法或者==loadmore==方法为空时，则上拉刷新或下拉加载失效
- 注意：在加载方法完毕后，需手动调用==onLoadOff==方法，重置组件位置，初始化状态
- 依赖==spinner==组件









## 实例
```

<Load-more
            :refresh="topMethod"
            height="100%"
            ref="more"
            :load-more="bottomMethod"
            :has-more="hasMore"
>

    <div style="width: 100%;height: 50px;" v-for="item in loadmore">{{item}}</div>

</Load-more>



```


```
    export default {
        data(){
            return {
                hasMore:true
            }
        },
        methods:{
            bottomMethod(){
                .... //获取数据
                this.hasMore = false //数据获取完毕
                this.$refs.loadmore.onLoadOff()
            },
            topMethod(){
               .... //获取数据
                this.$refs.loadmore.onLoadOff()
            }
        }
    }
```