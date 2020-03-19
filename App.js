import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {
  Drawer,
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Badge,
  Text,
  Footer,
  FooterTab,
} from 'native-base';
import Menu from './menu';

class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <ThemeProvider theme={theme}>
          <Container>
            <Drawer
              ref={ref => {
                this.drawer = ref;
              }}
              content={<Menu navigator={this.props.navigation} />}
              onClose={this.closeDrawer}>
              <Header style={{backgroundColor: '#8fbd40'}}>
                <Left>
                  <Button transparent onPress={this.openDrawer}>
                    <Icon name="menu" />
                  </Button>
                </Left>
                <Body>
                  <Title>Header</Title>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="md-notifications" style={{fontSize: 26}} />
                    <Badge style={{width: 12, height: 12}}></Badge>
                  </Button>
                  <Button transparent>
                    <Icon name="ios-contact" style={{fontSize: 36}} />
                  </Button>
                </Right>
              </Header>
              <Routes />
            </Drawer>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
