<template lang="html">
  <div style="width: 900px">
    <div v-for="(item, index) in divList" style="margin-bottom: 20px;">
      <p style="text-align: left">
        <span>*</span>
        <span>选项{{item.select}}</span>
        <input type="radio" name="radio" :id="index">
        <label :for="index">设为正确答案</label>
      </p>
      <editor v-model="item.editor.info" :isClear="isClear" :id="item.id"></editor>
    </div>
    <button @click="submit()">提交</button>
  </div>
</template>

<script>
  import wangEditor from "../common/wangEditor"
  import E from 'wangeditor'
  export default {
    data () {
      return {
        editor1: {
          info: ''
        },
        isClear: false,
        divList: [
          {
            id: 'editor1',
            select:'A',
            editor:{
              info:''
            }
          },
          {
            id: 'editor2',
            select:'B',
            editor:{info:''}
          },
          {
            id: 'editor3',
            select:'c',
            editor:{info:''}
          }]
      }
    },
    components: {
      editor: wangEditor
    },
    methods: {
      submit (){
        for (let i = 0; i < this.divList.length; i++) {
          console.log('hahahha----->', this.divList[i].editor.info)
        }
      }
    },
    mounted() {
      for (let i = 0; i < this.divList.length; i++) {
        this.divList[i].editor = new E("#" + this.divList[i].id);//new即可
      }
    }
  }
</script>
