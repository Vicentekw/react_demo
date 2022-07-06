/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-13 21:41:41
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-13 22:09:38
 */
import React, { Component } from 'react'

export default class App3 extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value:'测试一波'
    }
  }

 handleChange(e) {
   this.setState({
     value:e.target.value
   })
 }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <p>{this.state.value}</p>
      </div>
    )
  }
}
