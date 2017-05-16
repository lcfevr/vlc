
## Header组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default

    fixed                     Boolean              true

    title                     String               none

> fixed控制组件是否固定定位在屏幕的顶部


> title为header组件的标题，超出部分会以省略号形式隐藏


> slot name="left" slot name="right"分别为header组件左边的自定义区域与右边的自定义区域


  ```
  <Header :fixed="fixed" :title="title" ></Header>



  export default {

      data(){

          fixed:true,

          title:'title'
      }

  }

  ```