<template>
  <el-container>
    <el-header>
      <Top/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    import Top from '../../components/common/top.vue'
    import Nav from '../../components/common/nav.vue'
    export default {
        components:{
          Top,
          Nav
        }
    }
</script>

<style scoped>
  section.el-container {
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }
</style>
