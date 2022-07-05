/*
 * @Author: shimingxia
 * @Date: 2022-05-26 11:03:45
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-05 16:46:11
 * @Description: 
 */
import React, { Component} from 'react'
import {ThemeContext, UserContext} from '../Context'

export default class ContextTypePage extends Component {
  static contextType = ThemeContext
  static contextType = UserContext

  render() {
    const {themeColor, name} = this.context
    console.log(themeColor)
    return (
      <div className="border">
        天哪
        <h3 className={themeColor}>ContextTypePage</h3>
        <p>user: {name}</p>
      </div>
    )
  }
}