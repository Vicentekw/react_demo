/*
 * @Description:
 * @Author: huacong
 * @Date: 2021-12-19 16:43:19
 * @LastEditTime: 2021-12-19 17:06:18
 * @LastEditors: huacong
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Router,Route,hashHistory } from 'react-router'

import Index from "./Index"
import List from "./List"

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href='#/index'>首页</a>
                    </li>
                    <li>
                        <a href='#/list'>列表页</a>
                    </li>
                </ul>
                <br/>
                {this.props.children}
            </div>
        )
    }
}

let routes = <Router history={hashHistory}>
<Route path="/app" component={App}>
    <Route path="/index" component={Index}></Route>
    <Route path="/list" component={List}></Route>
</Route>
</Router>

ReactDOM.render(routes,
    document.getElementById('root')
    )