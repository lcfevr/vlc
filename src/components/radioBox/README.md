## Radio组件

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

    value                     Boolean                []           选中的数组（v-model）

    vertical                 Boolean                none           排列方式为row或者column




  > 组件会自动判断是否为Radio组，通过嵌套RadioGroup组件创建一个Radio组

  ```
  <Radio-group v-model="radio" :vertical="vertical">
    <Radio :disable="disable" label="1111"></Radio>
    <Radio label="222"></Radio>
    <Radio label="333"></Radio>
  </Radio-group>



  export default {

      data(){

          data:[],
          disable:true,
          vertical:true,
          radio:''
      }

  }

  ```