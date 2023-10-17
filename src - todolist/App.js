import React, { Fragment } from "react";
import "./index.css";
// 组件间通信
function App() {
  return (
    <div id="todoapp">
      <div className="title">
        <h1>开课吧 - todo</h1>
      </div>
      <div className="content">
        <div id="create-todo">
          <input
            id="new-todo"
            placeholder="What needs to be done?"
            autocomplete="off"
            type="text"
            value=""
          />
        </div>
        <ul id="todo-list">
          <li className="">
            <div className="todo done">
              <div className="display">
                <input className="check" type="checkbox" />
                <div className="todo-content">还信用卡</div>
                <span className="todo-destroy"></span>
              </div>
              <div className="edit">
                <input className="todo-input" type="text" value="还信用卡" />
              </div>
            </div>
          </li>
          <li className="">
            <div className="todo ">
              <div className="display">
                <input className="check" type="checkbox" />
                <div className="todo-content">今天要测试</div>
                <span className="todo-destroy"></span>
              </div>
              <div className="edit">
                <input className="todo-input" type="text" value="今天要测试" />
              </div>
            </div>
          </li>
          <li className="">
            <div className="todo ">
              <div className="display">
                <input className="check" type="checkbox" />
                <div className="todo-content">数据内容</div>
                <span className="todo-destroy"></span>
              </div>
              <div className="edit">
                <input className="todo-input" type="text" value="数据内容" />
              </div>
            </div>
          </li>
        </ul>
        <div id="todo-stats">
          <span className="todo-count">
            <span className="number">2</span> <span className="word">项待完成</span>
          </span>
          <span className="todo-clear">
            <a href="#">
              Clear <span>1</span>
              已完成事项
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default App;
