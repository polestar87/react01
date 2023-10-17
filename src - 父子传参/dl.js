import React, { Component } from 'react';
class Dl extends Component {
    changeShow =() => {
        let {name,openName, changeName} = this.props;
        changeName(name === openName ? "" : name);
    }
    render(){
        let {data, name, openName} = this.props;
        
        return <dl className={`friend-group ${name === openName ?"expanded":""}`}>
        <dt
            onClick={this.changeShow}
        >{data.title}</dt>
        {
            data.list.map(item=>{
                return <dd>{item.name}</dd>
            })
        }
    </dl>
    } 
}

export default Dl;