/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-13 21:41:41
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-13 22:03:14
 */
import React, { Component } from 'react'

export default class App2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num:20
    }
  }

  handleClick() {
    this.setState({
      num:this.state.num+1
    })
  }

  circle() {
    this.setState({
      num:this.state.num-1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick.bind(this)}>增加</button>
        <button onClick={this.circle.bind(this)}>减少</button>
      </div>
    )
  }
}
