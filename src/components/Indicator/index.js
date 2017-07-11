/**
 * Created by admin on 2017/6/22.
 */
import Indicator from './Indicator'
import {camelcaseToHyphen} from '../../utils/util'
import Vue from 'vue'
let instance;

Indicator.newInstance = properties => {

    let _props = properties || {};

    let props = '';

    Object.keys(_props).forEach(prop => {

        props += ' :' + camelcaseToHyphen(prop) + '=' + prop
    })

    const div = document.createElement('div');

    document.body.appendChild(div);

    let indicator = new Vue({
        el: div,
        template: `<Indicator ${props} v-model="visible" ></Indicator>`,
        components: {
            Indicator
        },
        data: Object.assign(_props, {
            visible: false,
            size: 45,
            type: 'snake',
            color: '#ffffff',
            text: '加载中...',
            onRemove:function(){}

        }),
        methods: {
            remove() {
                this.$children[0].visible = false;
                setTimeout(() => {
                    this.destroy();
                }, 300)
            },
            destroy(){

                this.$destroy();

                // if (!this.$el) return;
                document.body.removeChild(this.$el);
                this.onRemove()
            }
        }
    }).$children[0];


    return {
        open(options){

            indicator.$parent.visible = true;
            indicator.$parent.onRemove = options.onRemove;


            if ('size' in options) {
                indicator.$parent.size = options.size;
            }

            if ('type' in options) {
                indicator.$parent.type = options.type;
            }

            if ('color' in options) {
                indicator.$parent.color = options.color;
            }

            if ('text' in options) {
                indicator.$parent.text = options.text;
            }

        },

        remove(){

            indicator.visible = false;

            indicator.$parent.remove()

        },
        component: indicator
    }
};


function confirm(options) {
    instance = instance || Indicator.newInstance({
            size: 45,
            color: '#ffffff',
            text: '正在加载...',
            type: 'snake'
        });

    options.onRemove = function () {
        instance = null;
    }

    instance.open(options)

}


Indicator.blade = function (props = {}) {

    props.type = 'blade';
    return confirm(props)
}


Indicator.snake = function (props = {}) {

    props.type = 'snake';
    return confirm(props)
}

Indicator.circle = function (props = {}) {

    props.type = 'fading-circle';
    return confirm(props)
}

Indicator.bounce = function (props = {}) {

    props.type = 'double-bounce';
    return confirm(props)
}

Indicator.remove = function () {


    if (!instance) return false;

     instance = instance || Indicator.newInstance({
            size: 45,
            color: '#ffffff',
            text: '正在加载...',
            type: 'snake'
        })

    instance.remove()
}


export default  Indicator