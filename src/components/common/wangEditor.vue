<template lang="html">
  <div class="editor" style="width: 900px">
    <div ref="toolbar" class="toolbar" style="width: 900px">
    </div>
    <div ref="editor" class="text" style="width: 900px; height: 300px">
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'wangEditor',
    data () {
      return {
        editor: null,
        info_: null
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      isClear: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isClear (val) {
        // 触发清除文本域内容
        if (val) {
          this.editor.txt.clear()
          this.info_ = null
        }
      },
      value (val) {
        // 使用 v-model 时，设置初始值
        this.editor.txt.html(val)
      }
    },
    mounted () {
      this.seteditor()
    },
    methods: {
      seteditor () {
        // 创建editor编辑器
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        // this.editor.customConfig.uploadImgShowBase64 = true // base 64 存储图片
        this.editor.customConfig.uploadImgServer = '<%=path%>/Img/upload'// 配置服务器端地址
        // this.editor.customConfig.uploadImgHeaders = {      }// 自定义 header
        this.editor.customConfig.uploadFileName = 'myFileName' // 后端接受上传文件的参数名
        this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
        this.editor.customConfig.uploadImgMaxLength = 1 // 限制一次最多上传 3 张图片
        // this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

        // 配置菜单
        this.editor.customConfig.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          // 'backColor', // 背景颜色
          // 'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          // 'quote', // 引用
          'emoticon', // 表情
          'image', // 插入图片
          // 'table', // 表格
          // 'video', // 插入视频
          // 'code' // 插入代码
        ]

        // this.editor.customConfig.uploadImgHooks = {
        //   fail: (xhr, editor, result) => {
        //     // 插入图片失败回调
        //   },
        //   success: (xhr, editor, result) => {
        //     // 图片上传成功回调
        //   },
        //   timeout: (xhr, editor) => {
        //     // 网络超时的回调
        //   },
        //   error: (xhr, editor) => {
        //     // 图片上传错误的回调
        //   },
        //   customInsert: (insertImg, result, editor) => {
        //     // 图片上传成功，插入图片的回调
        //     console.log('1111111111111111', result)
        //     let url = result.data
        //     insertImg(url)
        //   }
        // }
        this.editor.customConfig.onchange = (html) => {
          this.info_ = html // 绑定当前逐渐地值
          this.$emit('change', this.info_) // 将内容同步到父组件中
        }
        this.editor.customConfig.customUploadImg = (files, insert) => {
          // files 是 input 中选中的文件列表
          // insert 是获取图片 url 后，插入到编辑器的方法
          console.log('图片列表：', files)
          // 上传代码返回结果之后，将图片插入到编辑器中
          insert(editor)
        }
        // 创建富文本编辑器
        this.editor.create()
      }
    }
  }
</script>

<style lang="css">
  .editor {
    width: 80%;
    margin: 0 auto;
  }
  .toolbar {
    border: 1px solid #ccc;
  }
  .text {
    border: 1px solid #ccc;
    height: 500px;
  }
  .w-e-toolbar{
    flex-wrap:wrap;
  }
</style>
