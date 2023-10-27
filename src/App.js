import React, { Fragment, useState } from "react";
import { Button } from "antd";
import { routes } from "./router";
import {Route, Switch} from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  return (
    <Fragment>
      {/* <Button type="primary">Primary Button</Button> */}
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              render={(props) => {
                return item.render(props);
              }}

            />
          );
        })}
      </Switch>
    </Fragment>
  );
}
export default App;
