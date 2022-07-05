/*
 * @Author: shimingxia
 * @Date: 2022-05-26 11:19:59
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 11:22:08
 * @Description: 
 */
import React, {Component} from "react";
import {ThemeConsumer, UserConsumer} from "../Context";

export default class ConsumerPage extends Component {
  render() {
    return (
      <div className="border">
        <h3>ConsumerPage</h3>
        <ThemeConsumer>
          {ctx => (
            <div>
              <div className={ctx.themeColor}>themeColor</div>
              <UserConsumer>{user => <p>user: {user.name}</p>}</UserConsumer>
            </div>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}