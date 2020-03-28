import React, {Component} from 'react';
import {View} from 'react-native';
import {Logo, ButtonBlue as Link, ButtonGreen} from './src/components/atoms';
import {
  Drawer,
  Header,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Badge,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const SideMenu = props => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Logo source={require('./assets/logo.png')} />
      </View>
      <View>
        <Link text="Trang chủ" onPress={() => navigation.navigate('Main')} />
        <Link text="Khóa học" onPress={() => navigation.navigate('Course')} />
        <Link text="Việc làm" onPress={() => navigation.navigate('Job')} />
        <Link
          text="Test & Ebook"
          onPress={() => navigation.navigate('TestEbook')}
        />
        <ButtonGreen
          text="Đăng xuất"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const RightMenu = props => {
  const navigation = useNavigation();

  return (
    <Right>
      <Button transparent onPress={() => navigation.navigate('Notify')}>
        <Icon name="md-notifications" style={{fontSize: 26}} />
        <Badge style={{width: 12, height: 12}}></Badge>
      </Button>
      <Button transparent onPress={() => navigation.navigate('UserInfo')}>
        <Icon name="ios-contact" style={{fontSize: 36}} />
      </Button>
    </Right>
  );
};

const HeaderTitle = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Title>Balance App</Title>
    </TouchableOpacity>
  );
};

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideMenu />}
        onClose={this.closeDrawer}>
        <Header style={{backgroundColor: '#4dc4ff'}}>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <HeaderTitle />
          </Body>
          <RightMenu />
        </Header>
        {this.props.children}
      </Drawer>
    );
  }
}
