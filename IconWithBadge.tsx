import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export class IconWithNumericBadge extends Component {
    render() {
        const{
            name, 
            badgeCount, 
            color, 
            size 
        } = this.props
        
        return(
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                {
                  badgeCount > 0 && (
                    <View
                        style={{
                            position: 'absolute',
                            right: -8,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            width: (badgeCount>9)? 22: 18,
                            height: 18,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {(badgeCount>99)?'99+': badgeCount}
                        </Text>
                    </View>
                  )
                }
            </View>
        )
    }
}

export default class IconWithBadge extends Component {
    constructor(props) {
        super(props)

        // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
        this.state = {
            badgeCount: 99
        }
    }

    render() {
        return (
            <IconWithNumericBadge 
                {...this.props} 
                badgeCount={this.state.badgeCount}
            />
        )
    }
}
