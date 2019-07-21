import React, {Component} from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  Platform,      // 获得平台信息
  StyleSheet, 
  View,
  Text, 
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
      ])
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

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View className="Content" style={styles.container}>
          <StatusBar 
            backgroundColor={'blue'}   // iOS 上不生效
            barStyle={'default'}
            networkActivityIndicatorVisible={true}  // Android 上不生效
          />
          <View style={styles.searchbar}>
            <TextInput style={styles.searchInput} placeholder='Search' />
            <Button 
              style={styles.searchButton} 
              title='Search'
              onPress={() => Alert.alert('Search something~!', null, null) } 
            />
          </View>
          <View style={styles.advertisement}>
            <ScrollView 
              ref="scrollView"    // 该参数将生成名为 scrollView 的实例并加入 this.refs 数组。这样在代码中就可以 this.refs.scrollView 来获取该组件。
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              pagingEnabled={true}
            >
              <TouchableHighlight onPress={ () => Alert.alert("Advertisement_1", null, null) }>
                <Text style={{
                  width: Dimensions.get('window').width,
                  height: 180,
                  backgroundColor: 'gray'
                }}>
                  Advertisement_1
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={ () => Alert.alert("Advertisement_2", null, null) }>
                <Text style={{
                  width: Dimensions.get('window').width,
                  height: 180,
                  backgroundColor: 'orange'
                }}>
                  Advertisement_2
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={ () => Alert.alert("Advertisement_3", null, null) }>
                <Text style={{
                  width: Dimensions.get('window').width,
                  height: 180,
                  backgroundColor: 'yellow'
                }}>
                  Advertisement_3
                </Text>
              </TouchableHighlight>
            </ScrollView>
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

  _renderRow = (rowData, sectionID, rowID) => {
    return(
      <TouchableHighlight onPress={ () => Alert.alert('你单击了商品列表', null, null)}>
        <View style={styles.productRow}>
          <Text>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : Platform.OS === "ios"? 20 : 0  // React Native 在 Android 上的绘图区域包括 System bar, 需要去除。
  },
  searchbar: {
    height: 40,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2
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
  }
});
