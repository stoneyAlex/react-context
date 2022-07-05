/*
 * @Author: shimingxia
 * @Date: 2022-05-26 11:07:53
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 11:18:45
 * @Description: 
 */
import React, { useContext} from 'react'
import {ThemeContext, UserContext} from '../Context'

export default function UseContextPage(props) {
  const {themeColor} = useContext(ThemeContext)
  const {name} = useContext(UserContext)
  return (
    <div className="border">
      <h3 className={themeColor}>UseContextPage</h3>
      <p>user: {name}</p>
    </div>
  )
}