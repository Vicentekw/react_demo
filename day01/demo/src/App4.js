/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-15 21:52:00
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-16 22:06:49
 */
import React, { Component } from 'react'

class Header extends Component{
    render() {
        return (
            <div style={{width:'100%',height:40,lineHeight:'40px',backgroundColor:this.props.bac}}>
                {this.props.title}</div>
        )
    }
}


class Foot extends Component{
    render() {
        return (
            <div style={{width:'100%',height:40,lineHeight:'40px',backgroundColor:this.props.bac}}>
                {this.props.title}
                {this.props.children}
                </div>
        )
    }
}


export default class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"首页标题",
            Name:'底部内容',
            hbac:'#ff9900',
            fbac:'#ff0000',
        }
    }
    render() {
        return (
            <div>·
                <Header title={this.state.title} bac={this.state.hbac}></Header>
                <Foot title={this.state.Name} bac={this.state.fbac}>hahahha</Foot>
            </div>
        )
    }
}
