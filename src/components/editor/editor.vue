<template>
    <pre ref="editor"   :style="getStyles" v-html="value"></pre>
</template>

<script>

    import 'ace-builds/src-min-noconflict/ace'

    ace.require("ace-builds/src-min-noconflict/ext-language_tools");

    export default {
        data(){
            return {
                editor:null
            }
        },
        props:{
            theme:{
                type:String,
                default:'twilight'
            },
            width:{
                type:String,
                default:'100%'
            },
            height:{
                type:String,
                default:'4rem'
            },
            mode:{
                type:String,
                default:'javascript'
            },
            value:{
                type:String,
                default:''
            },
            readOnly:{
                type:Boolean,
                default:true
            },
            styles:{
                type:Object,
                default:()=>{}
            }
        },
        methods:{
            insert(value){
                this.editor.insert(value)
            },
            getCursor(){
                this.editor.selection.getCursor();
            },
            goToLine(number){
                this.editor.gotoLine(number)
            },
            getLineLength(){
                this.editor.session.getLength();
            },

        },
        computed:{
            getStyles(){

                let style = this.styles;
                let customStyleWidth = this.width;
                let customStyleHeight = this.height;
                return Object.assign({},{
                    width:customStyleWidth,
                    height:customStyleHeight
                },style)
            }
        },
        mounted(){
            this.editor = ace.edit(this.$refs.editor);
            this.editor.$blockScrolling = Infinity;
            this.editor.setFontSize(12);

            this.editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true
            });

            if (this.theme){
                require(`ace-builds/src-min-noconflict/theme-${this.theme}`);
                this.editor.setTheme(`ace/theme/${this.theme}`);
            }

            if (this.mode)
            {
                require(`ace-builds/src-min-noconflict/mode-${this.mode}`);
                this.editor.getSession().setMode(`ace/mode/${this.mode}`);
            }

            if (this.value) this.editor.setValue(this.value);
            if (this.readOnly) this.editor.setReadOnly(true);
            this.editor.getSession().setUseWrapMode(false);
            this.editor.setHighlightActiveLine(false);
            this.editor.setShowPrintMargin(false);

        },
        watch:{

            theme(){
                if (this.theme){
                    require(`ace-builds/src-min-noconflict/theme-${this.theme}`);
                    this.editor.setTheme(`ace/theme/${this.theme}`);
                }
            },
            mode(){
                if (this.mode)
                {
                    require(`ace-builds/src-min-noconflict/mode-${this.mode}`);
                    this.editor.getSession().setMode(`ace/mode/${this.mode}`);
                }
            }

        },
        beforeDestroy(){
            this.editor.destroy();
        }
    }
</script>

