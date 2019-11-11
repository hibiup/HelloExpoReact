import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    StatusBar
} from 'react-native'

export default class Help extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={StyleSheet.container}>
                <Text xtyle={StyleSheet.text}>
                帮助页面
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
