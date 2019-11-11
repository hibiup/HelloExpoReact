import React, {Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    StatusBar
} from 'react-native'

export default class Chat extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View className="Content" style={styles.container}>
                <Text xtyle={StyleSheet.text}>
                聊天页面
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0  // React Native 在 Android 上的绘图区域包括 System bar, 需要去除。
    },
    text: {
        fontSize: 20
    }
})
