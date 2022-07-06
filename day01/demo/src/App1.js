/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Vicentekw
 * @Date: 2021-12-02 22:22:38
 * @LastEditors: Vicentekw
 * @LastEditTime: 2021-12-13 21:37:42
 */

//组件化开发

//1.引入核心模块
import React,{Component} from "react";
let name='晓敏',age=28,sex='女',hobit=['吃饭','睡觉','玩游戏'];
//2。定义一个组件并导出
export default  class App1 extends Component{
  render() { //渲染
    return(
      <div>
        <p>姓名:{name}</p>
        <p>年龄:{age}</p>
        <p>性别:{sex}</p>
        <ul>
          {
            hobit.map((item,i)=>{
              return(
                <li key={i}>{item}</li>
              )
            })
          }
        </ul>
      </div>    
    )
  }
}