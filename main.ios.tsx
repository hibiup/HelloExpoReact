import React, {Component} from 'react'
import {
  TabBarIOS
} from 'react-native'
 
import Home from './Home'
import Chat from './Chat'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'HOME'
    }
  }
  
  // Main 将接收到来自 App 的 createStackNavigator 传递的 navigation 参数，然后将它继续传递给 Home
  render() {
    return (
      <Home navigation={this.props.navigation} />
    )
  }
}