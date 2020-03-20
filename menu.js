import React, {Component} from 'react';
import {View} from 'react-native';
import {Logo, Button as Link} from './src/components/atoms';
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

export const Menu = props => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Logo source={require('./assest/logo.png')} />
      </View>
      <View>
        <Link
          text="Trang chủ"
          link
          onPress={() => navigation.navigate('Main')}
        />
        <Link
          text="Khóa học"
          link
          onPress={() => navigation.navigate('Course')}
        />
        <Link
          text="Việc làm"
          link
          onPress={() => navigation.navigate('Course')}
        />
        <Link
          text="Test & Ebook"
          link
          onPress={() => navigation.navigate('Course')}
        />
        <Link text="Đăng xuất" link />
      </View>
    </View>
  );
};

export class MainHeader extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<Menu />}
          onClose={this.closeDrawer}>
          <Header style={{backgroundColor: '#3397d5'}}>
            <Left>
              <Button transparent onPress={this.openDrawer}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Balance App</Title>
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
          {this.props.children}
        </Drawer>
      </>
    );
  }
}
