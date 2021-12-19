/*
 * @Description: 
 * @Author: huacong
 * @Date: 2021-12-18 10:13:53
 * @LastEditTime: 2021-12-19 14:42:05
 * @LastEditors: huacong
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ChildChild extends Component{
    static contextTypes = {
        title:PropTypes.string
    }

    render() {
        return (
            <div>
                {this.context.title}
            </div>
        )
    }
}


class Child extends Component{
    render() {
        return (
            <div>
                <ChildChild/>
            </div>
        )
    }
}

export default class App1 extends Component {
    static childContextTypes = {
        title:PropTypes.string
    }

    getChildContext() {
        return {
            title:'标题'
        }
    }

    render() {
        return (
            <div>
                <Child/>
            </div>
        )
    }
}
