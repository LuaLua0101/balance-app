import React, {Component} from 'react';
import {Segment, Button, Text, Icon} from 'native-base';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const CustomSegment = styled(Segment)`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.lightColor};
`;

const UserInfoTab = props => {
  const navigation = useNavigation();

  return (
    <CustomSegment>
      {props.one ? (
        <Button first onPress={() => navigation.navigate('UserInfo')} active>
          <Text>Thông tin cá nhân</Text>
        </Button>
      ) : (
        <Button first onPress={() => navigation.navigate('UserInfo')}>
          <Text>Thông tin cá nhân</Text>
        </Button>
      )}
      {props.two ? (
        <Button last onPress={() => navigation.navigate('MyCV')} active>
          <Text>Hồ sơ xin việc</Text>
        </Button>
      ) : (
        <Button last onPress={() => navigation.navigate('MyCV')}>
          <Text>Hồ sơ xin việc</Text>
        </Button>
      )}
    </CustomSegment>
  );
};

export default UserInfoTab;
