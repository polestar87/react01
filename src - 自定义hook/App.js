import React, { Fragment } from "react";
import { useScroll } from "./hook";
// 组件间通信
function App() {
  let [scrollY, scrollTo] = useScroll();
  return (
    <Fragment>
      <style>
        {`
          #root div{
            width: 500px;
            height: 400px;
            border: 2px solid #000;
          }
        `}
      </style>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <span
        style={{
          position: "fixed",
          top: "40%",
          left: 100,
          border: "1px solid #33ff99",
          padding: 10,
        }}
        onClick={() => {
          scrollTo(0);
        }}
      >
        当前滚动条位置为：{scrollY}{" "}
      </span>
    </Fragment>
  );
}
export default App;
