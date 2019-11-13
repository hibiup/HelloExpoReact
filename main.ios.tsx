import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
          iconName = `ios-home`;
        }
        else if (routeName === 'Chat') {
          // Add badges to some icons.
          IconComponent = IconWithBadge;
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
)
