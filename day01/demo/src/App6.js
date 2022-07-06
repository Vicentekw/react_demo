/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-16 22:06:37
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-16 22:50:19
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildChild extends Component{
    static contextTypes = {
        title: PropTypes.string
    }
    render() { 
        return(
            <div>
                {this.context.title}
            </div>
        )
    }
}


class Child extends Component{
    render() { 
        return(
            <div>
                <ChildChild />
            </div>
        )
    }
}

export default class App5 extends Component {

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
