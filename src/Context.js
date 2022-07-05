/*
 * @Author: shimingxia
 * @Date: 2022-05-25 15:52:59
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 11:14:05
 * @Description: 
 */
import React from 'react';

export const ThemeContext = React.createContext()
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export const UserContext = React.createContext()
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
