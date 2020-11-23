import Vue from 'vue'
import { Button, Table, TableColumn, Row, Message } from 'element-ui'

// 插件引用
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Message)

// 全局变量定义
Vue.prototype.$message = Message
