<template>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
<!--    closable是否可关闭  disable-transitions是否禁用渐变动画-->
    <el-select v-model="inputValue" placeholder="请选择"  v-if="inputVisible"
               @change="handleInputConfirm">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  </div>
</template>

<script>
  export default {
    name: "list3",
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        options: [{
          // value: '选项1',
          value: '黄金糕'
        }, {
          // value: '选项2',
          value: '双皮奶'
        }, {
          // value: '选项3',
          value: '蚵仔煎'
        }, {
          // value: '选项4',
          value: '龙须面'
        }, {
          // value: '选项5',
          value: '北京烤鸭'
        }],
      };
    },
    methods: {
      // 移除标签
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      // 点击按钮显示下拉框
      showInput() {
        this.inputVisible = true;
      },
      // 选择下拉框中选项后隐藏下拉框，并清空选中内容
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped lang="css">
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
