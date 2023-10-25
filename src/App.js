import React, { Fragment, useState } from "react";
import Nav from "./component/nav";
import Home from "./views/home";
import About from "./views/about";
import List from "./views/list";
import View404 from "./views/404";
import { Route, Switch, Redirect } from "react-router-dom";
import { routers } from "./router/route";
/* 
  Switch 中，当其中一项匹配成功之后，则不在向下匹配

*/
// 组件间通信
function App() {
  const [user, setUser] = useState("");
  return (
    <Fragment>
      <Nav />
      <Switch>
        {routers.map((item) => {
          return (
            <Route
              key={item.id}
              exact={item.exact}
              path={item.path}
              render={(rourerProps) => {
                return item.render({ ...rourerProps, user });
              }}
            ></Route>
          );
        })}
      </Switch>
    </Fragment>
  );
}
export default App;
