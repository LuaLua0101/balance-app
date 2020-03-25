import React from 'react';
import {Segment, Button, Text, Icon} from 'native-base';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const CustomSegment = styled(Segment)`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.lightColor};
`;

const MenuTab = props => {
  const navigation = useNavigation();

  return (
    <CustomSegment>
      {props.main ? (
        <Button first onPress={() => navigation.navigate('Main')} active>
          <Icon name="home" />
        </Button>
      ) : (
        <Button first onPress={() => navigation.navigate('Main')}>
          <Icon name="home" />
        </Button>
      )}
      {props.course ? (
        <Button last onPress={() => navigation.navigate('Course')} active>
          <Text>Khóa học</Text>
        </Button>
      ) : (
        <Button last onPress={() => navigation.navigate('Course')}>
          <Text>Khóa học</Text>
        </Button>
      )}
      {props.job ? (
        <Button last onPress={() => navigation.navigate('Job')} active>
          <Text>Việc làm</Text>
        </Button>
      ) : (
        <Button last onPress={() => navigation.navigate('Job')}>
          <Text>Việc làm</Text>
        </Button>
      )}
      {props.test ? (
        <Button last onPress={() => navigation.navigate('TestEbook')} active>
          <Text>Test & ebook</Text>
        </Button>
      ) : (
        <Button last onPress={() => navigation.navigate('TestEbook')}>
          <Text>Test & ebook</Text>
        </Button>
      )}
    </CustomSegment>
  );
};

export default MenuTab;
