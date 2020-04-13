import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Logo,
  ButtonBlue as Link,
  ButtonGreenCenter,
} from './src/components/atoms';
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
import {TouchableOpacity, Image} from 'react-native';

const SideMenu = props => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Logo source={require('./assets/logo.png')} />
      </View>
      <View>
        <ButtonGreenCenter
          text="Trang chủ"
          onPress={() => navigation.navigate('Main')}
        />
        <ButtonGreenCenter
          text="Khóa học"
          onPress={() => navigation.navigate('Course')}
        />
        <ButtonGreenCenter
          text="Việc làm"
          onPress={() => navigation.navigate('Job')}
        />
        <ButtonGreenCenter
          text="Test & Ebook"
          onPress={() => navigation.navigate('TestEbook')}
          style={{marginTop: 10}}
        />
        <ButtonGreenCenter
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
        <Badge style={{width: 12, height: 12}} />
      </Button>
      <Button transparent onPress={() => navigation.navigate('Bookmark')}>
        <Icon
          type="MaterialCommunityIcons"
          name="bookmark-multiple"
          style={{fontSize: 26}}
        />
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
      <Image
        source={require('./assets/2.png')}
        style={{flex: 1, width: 40, height: 40, resizeMode: 'contain'}}
      />
      {/* <Title>Balance</Title> */}
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
