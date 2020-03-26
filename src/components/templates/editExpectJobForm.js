import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, ButtonBlue, ButtonGreen} from '../atoms';
import {PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {H2, Card, CardItem, Body} from 'native-base';

const EditExpectJobForm = props => {
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={props.modal}
      onBackdropPress={props.closeModal}
      style={{
        maxHeight: 200,
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <H2 style={{margin: 20}}>Vị trí mong muốn</H2>
          <TextBox type={PHONE} />
          <ButtonBlue
            text="Đăng nhập"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default EditExpectJobForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
