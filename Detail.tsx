import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    StatusBar
} from 'react-native'

export default class Detail extends React.Component {
    render() {
        const data = this.props.navigation.getParam('data', 'NO-TITLE')

        return(
            <View style={StyleSheet.container}>
                <Text xtyle={StyleSheet.text}>
                详情页面: {data.title}
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
