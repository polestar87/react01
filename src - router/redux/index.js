import { createStore } from "redux";
function fn(){

}

const store = createStore(fn)
/* 
createStore()创建store仓库
reducer 纯函数
  1、相同的输入永远返回相同的输出
  2、不修改函数的输入值
  3、不依赖外部环境状态
  4、无任何副作用

store 状态仓库
store.getState()  获取store存储的state
store.dispatch(action) 发起一个action

*/