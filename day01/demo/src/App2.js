/*
 * @Description: 
 * @Author: huacong
 * @Date: 2021-12-19 14:43:50
 * @LastEditTime: 2021-12-19 15:34:58
 * @LastEditors: huacong
 */
// 不受控组件
import React, { Component } from 'react'

export default class App2 extends Component {
//    constructor(){

//    }

handleClick() {
    console.log(this.refs.username.value);
    console.log(this.refs.pwd.value);
}

    
    render() {
        return (  
            <div>
                账 号：<input type="text" ref="username"></input><br/><br/>
                密 码：<input type="password" ref="pwd"></input><br/><br/>
                <input type="button" value="登录" onClick={this.handleClick.bind(this)}></input>
            </div>
        )
    }
}
