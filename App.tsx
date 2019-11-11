import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './Home'
import Detail from './Detail'
import Help from './Help'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "首页面",
        tabBarLabel: "Home page"
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: "商品详情",
        tabBarLabel: "Detail page"
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        title: "帮助",
        tabBarLabel: "Help page"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)

const App = createAppContainer(MainNavigator);

export default App

