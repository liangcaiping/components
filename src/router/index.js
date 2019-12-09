import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/index'
import Top from '../components/common/top'
import Nav from '../components/common/nav'
import List1 from '../components/list/list1'
import List2 from '../components/list/list2'
import List3 from '../components/list/list3'
import List4 from '../components/list/list4'
import List5 from '../components/list/list5'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    // {path: '/', name: 'HelloWorld', component: HelloWorld}
    {name:'top', path:'/top',component:Top},
    {name:'nav', path:'/nav',component:Nav},
    {name:'index', path:'/', component:Index, children:[
        {name:'list1', path:'/list1', component:List1},
        {name: 'list2', path: '/list2', component: List2},
        {name: 'list3', path: '/list3', component: List3},
        {name: 'list4', path: '/list4', component: List4},
        {name: 'list5', path: '/list5', component: List5}
      ]}

  ]
})
export default router
