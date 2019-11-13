import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import {
  StyleSheet,
  Image
} from 'react'

import Main from './main'   // 自适应到 main.android 或 main.ios 文件
import Detail from './Detail'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Main,     // createStackNavigator 会将 `this`(MainNavigator) 作为 `navigation` 参数传递给 Main
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
    }
  },
  {
    initialRouteName: "Home"
  }
)

// 通过 createAppContainer 来构建绑定了 Navigator (this.prop.navigation) 的 App:NavigationContainer 实例。
const App = createAppContainer(MainNavigator)

export default App
