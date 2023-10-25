import React, { Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
function Nav(props) {
  let { pathname } = props.location;
  return (
    <Fragment>
      <style>
        {`
            nav a{
              color: #000;
              text-decoration: none;
            } 
            .active{
              color: red;
            }
          `}
      </style>
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName="active"
          isActive={(...arg) => {
            // console.log(arg);
            return pathname === "/" || pathname === "/index";
          }}
        >
          首页
        </NavLink>
        <span> | </span>
        <NavLink
          to="/list"
          isActive={() => {
            return pathname.slice(0, 5) === "/list";
          }}
        >
          产品列表
        </NavLink>
        <span> | </span>
        <NavLink to="/join">加入我们</NavLink>
        <span> | </span>
        <NavLink to="/about">关于我们</NavLink>
      </nav>
    </Fragment>
    // <Fragment>
    //   <Link to="/">首页</Link>
    //   <span> | </span>
    //   <Link to="/list">产品列表</Link>
    //   <span> | </span>
    //   <Link to="/about">关于我们</Link>
    // </Fragment>
  );
}

export default withRouter(Nav);
