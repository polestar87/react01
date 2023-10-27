import React from "react";
import IndexView from "../views/Index";
import UserView from "../views/User/user";
import TopicView from "../views/Topic/topic";
import AboutView from "../views/About/about";
import GetStartView from "../views/GetStart/getStart";
import View404 from "../views/404/View404";

const types = ['all', 'ask', 'share', 'job', 'good']
const routes = [
  /* 
   如果使用search， path只需要匹配目录
  */
  // {
  //   path: "/",
  //   exact: true,
  //   render(props) {
  //     return <IndexView {...props}></IndexView>;
  //   },
  // },
  {
    path: "/user",
    exact: true,
    render(props) {
      return <UserView {...props} />;
    },
  },
  {
    path: "/topic",
    exact: true,
    render(props) {
      return <TopicView {...props} />;
    },
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutView {...props} />;
    },
  },
  {
    path: "/getStart",
    exact: true,
    render(props) {
      return <GetStartView {...props} />;
    }
  },
  {
    path: ['/', '/:tab', '/:tab/:page'],
    exact: true,
    render(props){
      let {tab='all', page= 1} = props.match.params;
      if(types.includes(tab) && page > 0){
        props.match.params.tab = 'all';
        props.match.params.page = 1;
        return <IndexView {...props} />
      }
      return <View404 />
    }
  },
  {
    path:"",
    render(){
      return <View404 />
    }
  }
];

export { routes };
