<template>
    <el-card>
      <!--面包屑导航-->
       <el-card>
         <mybread level1="导航一" level2="导航二"></mybread>
       </el-card>
      <!--表格-->
       <el-collapse>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
       </el-collapse>




      <div v-for="item in divList">
        <p>
          <span>*</span>
          <span>选项{{item.select}}</span>
          <input type="radio" name="radio" :id="index">
          <label :for="index">设为正确答案</label>
        </p>

        <div :id="item.id"></div>
      </div>
    </el-card>
</template>


<script>
import E from 'wangeditor'
import $ from 'jquery'
    export default {
        name: "list1",
        data() {
          return {
            divList: [
              {
                id: 'editor1',
                select:'A'
              },
              {
                id: 'editor2',
                select:'B'
              },
              {
                id: 'editor3',
                select:'c'
            }],

          }
        },

mounted(){
  for (let i = 0; i < this.divList.length; i++) {
    this.editor1 = new E("#" + this.divList[i].id);//new即可
    this.editor1.customConfig.menus = []
    this.editor1.create()
  }

    //下面的为一些配置参数，默认全部都有，我们需要那些留下那些即可
    this.editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
          ];
    //       //聚焦时候函数
          this.editor.customConfig.onfocus = function () {
            //console.log("onfocus")
          };
          //失焦时候函数
          this.editor.customConfig.onblur = function () {
            //console.log("onblur")
          };
          //change事件，当富文本编辑器内容发生变化时便会触发此函数
          this.editor.customConfig.onchange = function (text) {
            console.log(text)
          };
    //       this.editor.create();//以上配置完成之后调用其create()方法进行创建
    //       // this.editor.create();
    //       // this.editor.create();
    //       // this.editor.create();
    //       this.editor.txt.html("<p>欢迎使用wangEditor编辑器</p>");//创建完成之后的默认内容
          //点击事件，拿到富文本编辑器里面的值
          $(".a-btn a").on("click", ()=> {
            //富文本编辑器里面的内容我们可以输出为html（布局）格式，也可以输出位text（文本）格式
            console.log(this.editor.txt.text());
            console.log(this.editor.txt.html());
            //this.editor.change && this.editor.change();
          })
        }
    }
</script>

<style scoped>
   .editor{
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
  }
  .a-btn{
    padding-bottom: 80px;
  }
  .a-btn a{
    display: block;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    width: 100px;
    text-align: center;
    float: right;
    background: dodgerblue;
  }
</style>
