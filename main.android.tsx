import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid
} from 'react-native'

import Home from './Home'
import Chat from './Chat'

export default class Main extends Component {
  // Main 会接收到来自 App 的 createStackNavigator 传递的 navigation 参数，然后将它继续传递给 Home
  render() {
    return (
      <ViewPagerAndroid
        style= {styles.viewPager}
        initialPage={0}
      >
        <View style={styles.pageStyle}>
          <Home navigation={this.props.navigation} />
        </View>
        <View style={styles.pageStyle}>
          <Chat navigation={this.props.navigation} />
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  viewPager : {
    flex : 1
  }
})
