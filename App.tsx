import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import {
  StyleSheet,
  Image
} from 'react'

import Home from './Home'
import Detail from './Detail'
import Help from './Help'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "首页面",
        tabBarLabel: "Home page",
        header: null   //首页面去掉导航栏
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: "商品详情",
        tabBarLabel: "Detail page",
        tabBarIcon:({focused})=>{
          if(focused){
            return(
              <Image source={ require('./assets/images/pic-02.jpg') } />   //选中的图片
            )
          } else {
            return(
              <Image source={ require('./assets/images/pic-02.jpg') } />   //默认图片                      
            )
          }
        }
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
