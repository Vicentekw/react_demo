/*
 * @Description: 
 * @Author: huacong
 * @Date: 2021-12-18 09:56:10
 * @LastEditTime: 2021-12-18 10:40:48
 * @LastEditors: huacong
 */
import React, { Component } from 'react'
import propTypes from 'prop-types'

class Header extends Component{
    
    static propTypes = {
        title:propTypes.string
    }

    render() {
        return(
            <div>{this.props.title}</div> 
        )
    }
}

export default class App extends Component {
     constructor(props) {
         super(props) 
         this.state = {
             title:1234
         }
     }
 
    render() {
        return (
            <div>
                <Header title={this.state.title}/>
            </div>
        )
    }
}
