// 入口文件

import Vue from 'vue';

//导入mui样式文件
import './lib/mui/css/mui.min.css'

//导入app根组件
import app from './App.vue';

//按需导入mint ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name,Header);//注册组件

var vm=new Vue({
    el:"#app",
    render:c=>c(app)
});