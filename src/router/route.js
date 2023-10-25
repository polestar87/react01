import React from "react";
import Home from "../views/home";
import About from "../views/about";
import List from "../views/list";
import View404 from "../views/404";
import Join from "../views/join";
const routers = [
  {
    id: 0,
    path: ["/", "/index"],
    exact: true,
    render(props) {
      return <Home {...props} />;
    },
  },
  {
    id: 1,
    path: "/about",
    exact: true,
    render(props) {
      return <About {...props} />;
    },
  },
  {
    id: 2,
    path: "/join",
    exact: true,
    render(props) {
      return <Join {...props} />;
    },
  },
  {
    id: 3,
    path: ["/list/:page", "/list"],
    exact: true,
    render(props) {
      let { pathname } = props.location;
      let paths = pathname.split("/");
      if (
        paths === "/list" ||
        (paths.length === 3 && paths[1] === "list" && paths[2] > 0)
      ) {
        return <List {...props}></List>;
      }
      return <View404 />;
    },
  },
  {
    id: 4,
    path: "",
    render(props) {
      return <View404 {...props}></View404>;
    },
  },
];
export {routers}
