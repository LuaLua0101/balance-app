import React, {useState} from 'react';
import MainHeader from '../../../menu';
import {Content, View} from 'native-base';
import {UserInfoTab} from '../organisms';
import {useNavigation} from '@react-navigation/native';
import {CVList} from '../templates';
import {Button} from 'react-native-elements';
import StepIndicator from 'react-native-step-indicator';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4dc4ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#4dc4ff',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4dc4ff',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4dc4ff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#4dc4ff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#4dc4ff',
};

const MyCV = props => {
  const navigation = useNavigation();
  const [isEdit, setEdit] = useState(false);
  const [step, setStep] = useState(0);

  const openResult = () => {
    navigation.navigate('Result');
  };

  return (
    <MainHeader>
      <UserInfoTab two />
      <Content style={{height: 2700, backgroundColor: '#fff'}}>
        {isEdit ? (
          <View style={{margin: 10}}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={step}
              labels={labels}
            />
          </View>
        ) : (
          <>
            <CVList />
            <Button
              title="Cập nhật hồ sơ"
              type="outline"
              onPress={() => setEdit(true)}
            />
          </>
        )}
      </Content>
    </MainHeader>
  );
};

export default MyCV;
