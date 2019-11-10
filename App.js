import React, {Component} from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  Platform,      // 获得平台信息
  StyleSheet, 
  View,
  Text,
  Image,
  TextInput,
  Button, 
  ScrollView,
  Dimensions,         // 获得屏幕尺寸
  ListView,
  Alert,              // 对话框
  TouchableHighlight  // 可点击组件
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged:(r1, r2) => r1 !== r2
})

/**
 * 组件类的名称缺省为 App, `node_modules/expo/AppEntry.js` 缺省注册了该组件作为 root component.
 */
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0,
      dataSource: ds.cloneWithRows([
        'Item_1',
        'Item_2',
        'Item_3',
        'Item_4',
        'Item_5',
        'Item_6',
        'Item_7',
        'Item_8',
        'Item_9',
        'Item_10'
      ]),
      advertisements: [
        {
          image: require('./assets/adv/advertisment-pic-01.jpg')  // require 载入本地资源。注意相对路径。
        },
        {
          image: require('./assets/adv/advertisment-pic-02.jpg') // image: 'https://img13.360buyimg.com/cms/jfs/t4090/228/1399180862/217278/206073fe/5874e621Nc675c6d0.jpg'
        },
        {
          image: require('./assets/adv/advertisment-pic-03.jpg') 
        },
      ],
      searchText: ''
    }
  }

  /**
   * render 后执行
   * 
   * 在 React Native 中，所有界面都可以看做是一个组件(Component)，例如本 App 就继承自 Component，因此它就有声明周期。
   */
  componentDidMount() {
    this._startTimer()
  }

  /**
   * render 前，constructor 后执行
   */
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  _startTimer() {
    this.interval = setInterval(() => {
      let nextPage = this.state.currentPage + 1;
      if (nextPage >= 3) {
        nextPage = 0
      }
      this.setState({currentPage: nextPage})
      const offSetX = nextPage * Dimensions.get('window').width
      this.refs.scrollView.scrollResponderScrollTo({x: offSetX, y : 0, animated: true})
    }, 2000)  // End setInterval()  间隔为 2s
  }

  _renderRow = (rowData, sectionID, rowID) => {
    return(
      <TouchableHighlight onPress={ () =>
          Alert.alert('你单击了商品列表', null, null) 
        }>
        <View style={styles.productRow}>
          <Text>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    // 翻页指示器个数（等于广告数量）
    const advertisementCount = this.state.advertisements.length
    // 翻页指示器（圆点）外观
    const circleSize = 8
    const circleMargin = 5
    // 翻页指示器整体宽度
    const indicatorWidth = (circleSize + circleMargin * 2) * advertisementCount
    // 坐标左位置
    const left = ( Dimensions.get('window').width - indicatorWidth)

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="Content" style={styles.container}>
        <StatusBar 
          backgroundColor={'blue'}   // iOS 上不生效
          barStyle={'default'}
          networkActivityIndicatorVisible={true}  // Android 上不生效
        />
        <View style={styles.searchbar}>
          <TextInput 
            style={styles.searchInput}
            placeholder='Search'
            onChangeText = { (text) => {
              this.setState( {searchText : text} )
              console.log('Input: ' + text)
            } }
          />
          <Button 
            style={styles.searchButton}
            title='Search'
            onPress={ () =>
              Alert.alert('Searching ' + this.state.searchText + '...', null, null) 
            }
          />
        </View>
        <View style={styles.advertisement}>
          <ScrollView 
            ref="scrollView"    // 该参数将生成名为 scrollView 的实例并加入 this.refs 数组。这样在代码中就可以 this.refs.scrollView 来获取该组件。
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            pagingEnabled={true} >
            {
              this.state.advertisements.map( (advertisement, index) => {
                return(
                  <TouchableHighlight onPress={ () => 
                    Alert.alert("Advertisement_"+(index+1), null, null) 
                  }>
                    <Image 
                      style={ styles.advertisementContent } 
                      source={ advertisement.image }
                    />
                  </TouchableHighlight>
                )
              } )
            }
          </ScrollView>
          <View style={[  // 广告位指示器
            styles.indicator,
            { left: left }
          ]} >
            {
              this.state.advertisements.map( (advertisement, index) => {
                return(<View 
                  key= {index} 
                  style={ (index === this.state.currentPage)
                    ? [
                      styles.circleSelected,
                      {
                        borderRadius : circleSize/2,
                        width : circleSize,
                        height : circleSize,
                        marginHorizontal : circleMargin
                      }
                    ] : [
                      styles.circle,
                      {
                        borderRadius : circleSize/2,
                        width : circleSize,
                        height : circleSize,
                        marginHorizontal : circleMargin
                      }
                    ] }/> )
              } )
            }
          </View>
        </View>
        <View style={styles.products}>
          <ListView 
            dataSource={this.state.dataSource}  // 数据源
            renderRow={this._renderRow}         // 返回每一条数据的绘图
          />
        </View>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0  // React Native 在 Android 上的绘图区域包括 System bar, 需要去除。
  },
  searchbar: {
    height: 40,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10
  },
  searchButton :{
    flex: 1
  },
  advertisement: {
    height: 180
  },
  products: {
    flex: 1
  },
  productRow: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  advertisementContent: {
    width: Dimensions.get('window').width,
    height: 180
  },
  indicator: {
    position : 'absolute',
    top: 160,
    flexDirection : 'row'
  },
  circle: {
    backgroundColor :'gray'
  },
  circleSelected: {
    backgroundColor : 'white'
  }
});
