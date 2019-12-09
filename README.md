# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
1.下载：npm install wangeditor
2.使用组件wangEditor.vue,位置在src->components
3.在需要使用富文本的页面引入组件wangEditor,并注册为组件
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%871.png
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%872.png
将需要替换的地方改为editor组件
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%873.png
4.由于组件需要多次用到，所以高度不能固定，需要动态修改
在组件中设置默认高度，通过props进行传值
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%874.png
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%875.png
以上代码在wangEditor中已经存在，需要修改的是自己本身页面所需高度，例如：协议页面，绑定height
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%876.png
在data中定义高度
注意：高度只是组件内容高度，并不包含菜单栏，此处为页面中只有一个编辑器的用法，多个编辑器根据具体情况遍历
https://github.com/liangcaiping/components/blob/master/readmeImage/%E5%9B%BE%E7%89%877.png



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
