import React, { Fragment } from 'react';
import data from "./data";
import "./index.css";
import Dl from './dl';
// 组件间通信
class App extends React.Component {
    state = {
        openName: "family"
    }
    changeName=(name)=>{
        this.setState({
            openName: name
        })
    }
    render(){
        let {openName} = this.state;
        return (<div className="friend-list">
            {Object.keys(data).map(item=>{
                return <Dl 
                    data={data[item]}
                    name={item}
                    openName={openName}
                    changeName={this.changeName}
                />
            })}
        </div>)
    }
}
export default App;