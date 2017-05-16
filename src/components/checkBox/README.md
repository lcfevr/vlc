## CheckBox组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    value                     Boolean               false           是否选中（v-model）

    label               [String,Number,Boolean]      none           label描述


    disable                  Boolean                false           是否禁用





## CheckBoxGroup组件

***全局组件:[否]***

**接收prop参数：**

    props                     type                 default          description

    value                     Array                  []           选中的数组（v-model）

    vertical                 Boolean                none           排列方式为row或者column




  > 组件会自动判断是否为CheckBox组，通过嵌套CheckBoxGroup组件创建一个CheckBox组

  ```
  <CheckBox-group v-model="data" :vertical="vertical">
        <CheckBox label="aaa" :disable="visible"></CheckBox>
        <CheckBox label="bbb"></CheckBox>
        <CheckBox label="ccc"></CheckBox>
  </CheckBox-group>



  export default {

      data(){

          data:[],
          vertical:true
      }

  }

  ```




