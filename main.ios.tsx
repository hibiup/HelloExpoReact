import React, {Component} from 'react'

import Home from './home'

export default class Main extends Component {
  // Main 将接收到来自 App 的 createStackNavigator 传递的 navigation 参数，然后将它继续传递给 Home
  render() {
    return (
      <Home navigation={this.props.navigation} ></Home>
    )
  }
}