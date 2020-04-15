import React, {Component} from 'react';
import {Card, Icon} from 'react-native-elements';
import {
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as cnt from '../../../utilities/constants';
import Email from './Email';
import Separator from './Separator';
import Tel from './Tel';
import Address from './Address';
import {Footer, FooterTab, Button, Spinner} from 'native-base';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});

class Contact extends Component {
  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
  };

  onPressEmail = email => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err),
    );
  };

  renderHeader = () => {
    const {
      avatar,
      gender,
      name,
      address: {city, country},
    } = this.props;

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              'https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png',
          }}>
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: cnt.API_URL + 'public/admins/img/users' + '/' + avatar,
              }}
            />
            <Text style={styles.userNameText}>{name}</Text>
            <Text style={styles.userCityText}>
              {gender == 0 ? 'Nữ' : 'Nam'}
            </Text>
            {/* <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>{this.props.address}</Text>
              </View>
            </View> */}
          </View>
        </ImageBackground>
      </View>
    );
  };

  renderTel = () => (
    <Tel
      number={this.props.phone}
      onPressSms={this.onPressSms}
      onPressTel={this.onPressTel}
    />
  );

  renderAddress = () => <Address address={this.props.address} />;

  renderEmail = () => (
    <Email email={this.props.email} onPressEmail={this.onPressEmail} />
  );

  render() {
    return (
      <>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Card containerStyle={styles.cardContainer}>
              {this.renderHeader()}
              {this.renderTel()}
              {Separator()}
              {this.renderEmail()}
              {this.renderAddress()}
            </Card>
          </View>
        </ScrollView>
        <Footer style={{height: 40}}>
          <FooterTab>
            <Button style={{height: 40, backgroundColor: '#4dc4ff'}}>
              <Text>Đổi mật khẩu</Text>
            </Button>
            <Button
              style={{height: 40, backgroundColor: '#8bc94d'}}
              onPress={this.props.edit}>
              <Text>Đổi thông tin cá nhân</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}

export default Contact;
