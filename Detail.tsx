import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    StatusBar,
    Picker,
    Slider,
    Switch,
} from 'react-native'

export default class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: 'java',
            sliderValue: 5,
            switchIsOn: false
        }
    }
    render() {
        const data = this.props.navigation.getParam('data', 'NO-TITLE')

        return(
            <View style={StyleSheet.container}>
                <Text xtyle={StyleSheet.text}>
                入参: {data.title}
                </Text>

                <Picker 
                    style={ styles . picker }
                    selectedValue={this.state.language}
                    onValueChange={ (lang) => this.setState({ language: lang} ) }>
                        <Picker.Item label= "Java" value= "java" />
                        <Picker.Item label= "JavaScript" value= "javascript" />
                </Picker>

                <Slider minimumValue={0}           // 最小值
                    maximumValue={10}              // 最大值
                    style={{ width : 200 }}
                    step={1}                       // 步长， 在minimumValue 和maximumValue 之间
                    maximumTrackTintColor='red'    // Slider 滑道右侧的颜色
                    minimumTrackTintColor= 'blue'  // Slider 滑道左侧的颜色
                    value={this.state.sliderValue }  // Slider 滑块的初始位置
                    onValueChange={ (value) => this.setState({sliderValue : value}) } />
                <Text>Slider 值：{this.state.sliderValue}</Text>

                <Switch onTintColor='blue'     // 开启时的背景颜色
                    thumbTintColor='gree'      // 开关上原形按钮的颜色
                    tintColor='black'          // 关闭时背景颜色
                    onValueChange={ () => this.setState( {
                        switchIsOn : !this.state.switchIsOn
                    } ) } // 当状态值发生变化值回调
                    value={this.state.switchIsOn === true} // 默认状态 
                />
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
    },
    web: {
        width: 200,
        height: 200
    }
})
