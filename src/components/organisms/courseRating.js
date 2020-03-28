import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonBlue} from '../atoms';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {H2} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';

const CourseRating = props => {
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={props.modal}
      onBackdropPress={props.closeModal}
      style={{
        maxHeight: 250,
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <H2 style={{margin: 20}}>Đánh giá khóa học</H2>
          <AirbnbRating
            reviews={['Vô cùng tệ', 'Tệ', 'Tạm được', 'Tốt', 'Cực kỳ tốt']}
          />
          <ButtonBlue
            text="Đồng ý"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CourseRating;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
