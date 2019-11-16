import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import Home from './Home'
import Chat from './Chat'

import IconWithBadge from "./IconWithBadge"
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default createBottomTabNavigator(
  {
    Home: Home,
    Chat: Chat,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home'
        }
        else if (routeName === 'Chat') {
          // Add badges to some icons.
          IconComponent = IconWithBadge;
          iconName = `ios-chatbubbles${focused ? '' : ''}`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
)

/*
import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid
} from 'react-native'

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
*/
