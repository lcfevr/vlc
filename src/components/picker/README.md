# Picker
## 参数配置
### 通用配置
props| type | default | description
---|---|---|---
value| Boolean |false|显示/隐藏
type|String |'DatePicker' （'DatePicker','AreaPicker','NormalPicker'）|默认的组件类型
styles|Object |{}|自定义行内样式
@sure |Function |none|自定义事件
@cancle|Function |none|自定义事件

### DatePicker

props| type | default | description
---|---|---|---
dateValue|String （'2017/8/9'）|日期初始化
year|[Boolean, Array] |true|年份的数组，为false时不渲染当前列
month|[Boolean, Array] |true| 月份的数组，为false时不渲染当前列
day|[Boolean, Array] |true| 天的数组，为false时不渲染当前列
valueSeparator|String | '/'|分隔符

### AreaPicker
props| type | default | description
---|---|---|---
areaValue|String （'北京市/市辖区/东城区'） |none|区域初始化
valueSeparator|String | '/'|分隔符


### NormalPicker
props| type | default | description
---|---|---|---
list| Object[] |[] |列表项
initArr|Array |[]|列初始化


## 说明

- 一个选择器，内置了省市区选择器与日期选择器，支持自定义
- 提供三种类型配置，AreaPicker 为省市区选择器，DatePicker为日期选择器，NormalPicker为自定义选择器
- ==注意：省市区的初始化数据可传入地区代号与具体区域名称 （eg. '110000/110100/110101' or '北京市/市辖区/东城区'）==
- NormalPicker中的initArr数组里的每一项代表该项索引的列初始值，list为对象数组,list下的target为当前列描述，list.list为对象数组，包含该列下的每一项数据。
- 点击组件确定按钮是会触发sure自定义事件，接收一个object，包含当前选择中项的数据，点击取消按钮会触发cancle自定义事件,无参数传入
- 每一列滑动时都会触发normal-change事件，返回当前列的相关信息。


```
<Picker type="DatePicker" :date-picker="dateValue" @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>


<Picker type="AreaPicker" :area-picker="areaValue" @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>


<Picker type="NormalPicker" :init-arr="2015" :list="list" @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>





export default {
    data(){
        return {
            areaValue:'北京市/市辖区/东城区',
            dateValue:'2017/8/9',
            visible : true,
            list:[
                    {
                        target: 'targetA',
                        list: [{value: 'a', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 'c', code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'targetB',
                        list: [{value: 'b', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'targetC',
                        list: [{value: 'c', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    }
                ], // code为唯一值，value为显示出的具体文本



            initArr:[9, 1, 1]
        }
    }
}

```