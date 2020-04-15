import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextBox, ButtonBlue} from '../atoms';
import {PHONE} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import {H2} from 'native-base';

const EditDegreeForm = props => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <H2 style={{margin: 20}}>Bằng cấp</H2>
        <TextBox type={PHONE} />
        <ButtonBlue
          text="Đăng nhập"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};

export default EditDegreeForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
