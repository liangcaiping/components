<template>
  <div class="ces-main">
    <ces-table
      size='mini'
      :isSelection='true'
      :isBorder="false"
      :isIndex='true'
      :isPagination='true'
      :isHandle='true'
      :tableData='tableData'
      :tableCols='tableCols'
      :pagination='pagination'
    >
    </ces-table>
  </div>
</template>

<script>
  import table from "../common/table"
  export default {
    name: "list5",
    data(){
      return {// 表格
          tableData:[
            {name:'张三',age:'12',sex:'男',interest:'女'},
            {name:'筱华',age:'27',sex:'女',interest:'羽毛球'},
            {name:'张三',age:'12',sex:'男',interest:'女'},
            {name:'筱华',age:'27',sex:'女',interest:'羽毛球'},
            {name:'筱华',age:'27',sex:'女',interest:'羽毛球'},
            {name:'筱华',age:'27',sex:'女',interest:'羽毛球'},
            {name:'筱华',age:'27',sex:'女',interest:'羽毛球'}

          ],
          tableCols:[
            {label:'姓名',prop:'name'},
            {label:'年龄',prop:'age'},
            {label:'性别',prop:'sex'},
            {label:'爱好',prop:'interest'},
            {label:'操作',type:'Button',btnList:[
                {type:'primary',label:'编辑',handle:row=>''},
                {type:'danger',label:'删除',handle:row=>''},
              ]},
            {label:'按钮',type:'Radio',change:false, radioList:[
                {type:'男',label:'1',handle:row=>''},
                {type:'女',label:'2',handle:row=>''},
              ]},
          ],
          pagination:{
            pageSize:10,
            pageNum:1,
            total:7
          }
      }
    },
    methods: {

    },
    components:{
      cesTable : table
    }
  }
</script>

<style scoped lang="css">
/*<!--  分页样式-->*/
  /deep/ .el-pagination {
    margin-top: 20px;
    display: inherit !important;
    justify-content: right;
    height: 100%;
    text-align: right;
  }
  /deep/ .el-table th {
    background-color: #fafafa;
    padding: 15px 0;
  }
</style>
