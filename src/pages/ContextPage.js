import React, { Component } from 'react'
import {ThemeProvider, UserProvider } from '../Context'
import ConsumerPage from './ConsumerPage'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'

import {Button} from 'antd'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'stoney'
      }
    }
  }

  changeColor = () => {
    const {themeColor} = this.state.theme
    this.setState({
      theme: {themeColor: themeColor === 'red' ? 'green' : 'red'}
    })
  }

  render() {
    const {theme, user} = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <Button type="primary" onClick={this.changeColor}>change color</Button>
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ConsumerPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    )
  }
}