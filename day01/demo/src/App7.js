/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-16 22:57:02
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-16 23:06:16
 */
import React, { Component } from 'react'


class Child extends Component{


    handleClick() {
       this.props.fatherClick(1)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>按钮点击</button>
                {this.props.children}
            </div>
        )
    }
}

export default class App7 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num:20
        }
    }

    fatherClick(val) {
        this.setState({
            num:this.state.num+val
        })
    }

    render() {
        return (
            <div>
                <Child fatherClick={this.fatherClick.bind(this)}>{this.state.num}</Child>
            </div>
        )
    }
}
