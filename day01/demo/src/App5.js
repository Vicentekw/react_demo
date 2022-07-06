/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-16 22:06:37
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-16 22:36:42
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component{
    static propTypes = {
        title: PropTypes.string
    }
    render() { 
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default class App5 extends Component {
    render() {
        return (
            <div>
                <Header title={123}/>
            </div>
        )
    }
}
