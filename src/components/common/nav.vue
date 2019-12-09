<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :router="true"
    :unique-opened="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/list1">普通使用wangeditor</el-menu-item>
        <el-menu-item index="/list2">vue中使用wangeditor</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/list3">基于element-ui中的标签下拉框的重新封装</el-menu-item>
<!--        <el-menu-item index="/list4">选项2</el-menu-item>-->
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/list5">element-ui表格封装</el-menu-item>
        <el-menu-item index="/list6">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航四</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/list7">选项1</el-menu-item>
        <el-menu-item index="/list8">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "nav.vue"
    }
</script>

<style scoped>
  .el-menu{
    background-color: #D3DCE6;
  }
</style>

