import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {ButtonGreenCenter} from '../atoms';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {UserInfoTab} from '../organisms';

const Result = props => {
  return (
    <MainHeader>
      <UserInfoTab two />
      <Content padder style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require('../../../assest/banlatrieuphu.jpg')}
          />
          <Text style={styles.title}>
            Congratulation, your order is accepted
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, sed te sumo euismod, doming molestiae
            consetetur nec ne. Cu quem aeterno labores eos
          </Text>
          <ButtonGreenCenter text="Tiếp tục" />
        </View>
      </Content>
    </MainHeader>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 16,
    margin: 40,
  },
});
