/*
 * @Description: 
 * @Author: huacong
 * @Date: 2021-12-19 14:43:50
 * @LastEditTime: 2021-12-19 15:50:23
 * @LastEditors: huacong
 */
// 受控组件
import React, { Component } from 'react'

export default class App2 extends Component {
   constructor(props){
    super(props)
    this.state= {
        username:"",
        pwd:""
    }
   }

   handleChange(e,event) {
    console.log(e.target.value);
    console.log(event);
    this.setState({
        username:e.target.value,
    })
}

handleChange1() {

}

handleClick(e,d) {
console.log(e);
console.log(d);
}
    
    render() {
        return (  
            <div>
                账 号：<input type="text" value={this.state.username} onChange={this.handleChange.bind(this)}></input><br/><br/>
                {/* 密 码：<input type="password" value={this.state.pwd} onChange={this.handleChange1.bind(this)}></input><br/><br/> */}
                <input type="button" value="登录" onClick={this.handleClick.bind(this,'ddd',11)}></input>
            </div>
        )
    }
}
