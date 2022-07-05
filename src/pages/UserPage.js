/*
 * @Author: shimingxia
 * @Date: 2022-05-25 16:27:36
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-25 16:32:38
 * @Description: 
 */
import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

export default function UserPage(props) {
  const ctx = useContext(ThemeContext)

  return (
    <div>
      <h1 className={ctx.themeColor}>UserPage</h1>
    </div>
  )
}