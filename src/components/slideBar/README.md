## SlideBar组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    height                   String                '2.35rem'        组件高度

    styles                   Object                  {}             自定义样式

     list                    Array                  none           slidebar菜单栏数据

    childWidth                Number                  70            单个菜单栏宽度

    scrollColor               String                 '#39f'         菜单栏底部边框颜色

    textAlign                 String                 'center'        文本对齐的方式

     flex                    Boolean                  true          菜单栏等分

     index                 Number,String               0            初始索引

    distanceIndex              Number                  1.5           滑动速度

    isFixedHeader             Boolean                  false         滑动时header是否吸顶

    isDrag                   Boolean                   false         是否允许拖动



菜单栏跟container项均可通过slot配置 配置方法如下：

```
     <Slide-bar :items="items" :flex="flex" >
                <div slot="slide-bar-header-0">
                    <span>a</span>
                </div>
                <div slot="slide-bar-header-1">
                    <span>a</span>
                </div>
                <div slot="slide-bar-header-2">
                    <span>a</span>
                </div>
                <div slot="slide-bar-header-3">
                    <span>a</span>
                </div>
                <div slot="slide-bar-header-4">
                    <span>a</span>
                </div>
                <div slot="slot-item-0" style="height:100%;flex: 1;background:red"></div>
                <div slot="slot-item-1" style="height:100%;flex: 1;background:yellow"></div>
                <div slot="slot-item-2" style="height:100%;flex: 1;background:black"></div>
     </Slide-bar>

```

```
  export default {

      data(){

          items:[],
          flex:false,


      }

  }

  ```