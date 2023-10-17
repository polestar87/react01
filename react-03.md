# React-3
## 上节课重点内容回顾
- 组件间的信息传递
- 生命周期

## 课程目标
- 掌握React其他 API 使用：受控组件、key、PureComponent、ref、children、dangerouslySetInnerHTML
- todoList 应用

## 课程内容
### 受控组件
 受控组件和非受控组件
### key 的问题
在 React ，组件每次更新时，会生成一个 虚拟DOM，和原有的虚拟DOM进行对比。
如果是批量生成的一组元素，那React就会根据 key 值去做对比
**一个列表中的每一项 key 是唯一的**
**如果列表中发生顺序等操作变化，key 一定要用数据的id**

### PureComponent 
 PureComponent 提供了一个具有浅比较的 shouldComponentUpdate 方法,其他和 Component 完全一直

### ref
- 旧版 - string ref
- 主流 - createRef()
- 注意：在 组件挂载完成之后及更新之后使用

### children
- 组件标签对之间的内容会被当做一个特殊的属性 props.children 传入组件内容
- 可以自定义结构的组件的常用形式
    - children
    - 传递函数
    - 传递子组件
### dangerouslySetInnerHTML
  直接设置标签的 innerHTML

```javascript
const data = `<h1>Hello world</h1>`
<div dangerouslySetInnerHTML={{__html: data}}></div>
```



## 实战 - 完整todoList
## 练习
- todoList - 自己实现一遍
## 下节课内容
- hooks
- React-router-dom