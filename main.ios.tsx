import React, {Component} from 'react'
import {Container, Content, Footer, FooterTab, Badge, Button, Icon, Text} from 'native-base'

import Home from './Home'
import Chat from './Chat'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'Home'
    }
  }

  render () {
    return(
      <Container>
        {this._renderContent() }

        <Footer>
          <FooterTab>
            <Button active={this.state.selectedTab === 'Home'}
              onPress={() => {
                this.setState({ selectedTab: 'Home'})
              }}>
              <Icon name='ios-home' />
              <Text>Home</Text>
            </Button>
            <Button active={this.state.selectedTab==='Chat'}
              onPress={() => {
                this.setState({selectedTab: 'Chat'})
              }}>
                <Icon name='ios-chatbubbles'/>
                <Badge style={{ position: 'absolute', left: 110, top: 8 }}><Text>2</Text></Badge>
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }

  _renderContent() {
    /**
     * App 将 navigation 传递给 main, main 再传递给 Home 和 Chat（实际上 Home 和 Chat 共享相同的 Navigation 并不合理，实际应用中
     * 可以定义多个 Navigation 分别传递给 Home 和 Chat。）
     */
    if(this.state.selectedTab === 'Home') {
      return (
        <Content>
          <Home navigation={this.props.navigation} />
        </Content>
      )
    } else if(this.state.selectedTab === 'Chat'){
      return (
        <Content>
          <Chat navigation={this.props.navigation} />
        </Content>
      )
    }
  }
}
