/*
 * @Author: shimingxia
 * @Date: 2022-05-25 15:32:46
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-25 16:31:27
 * @Description: 
 */
import React, { Component } from 'react'
import { ThemeContext } from '../Context'
import UserPage from './UserPage'

class HomePage extends Component {
  // static contextType = ThemeContext
  render() {
    const {themeColor} = this.context
    console.log(this)
    return (
      <div>
        <h3 className={themeColor}>HomePage</h3>
        <UserPage />
      </div>
    )
  }
}

HomePage.contextType = ThemeContext
export default HomePage