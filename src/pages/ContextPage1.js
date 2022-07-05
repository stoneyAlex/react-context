/*
 * @Author: shimingxia
 * @Date: 2022-05-25 15:29:02
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-25 15:55:51
 * @Description: 
 */
import React, { Component } from 'react'
import HomePage from './HomePage'
import { ThemeProvider } from '../Context'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      }
    }
  }
  render() {
    const {theme} = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider>
      </div>
    )
  }
}