import React from 'react';
import {Segment, Button, Text} from 'native-base';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const CustomSegment = styled(Segment)`
  min-width: 100%;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.lightColor};
`;

const CourseTab = props => {
  const navigation = useNavigation();

  return (
    <CustomSegment>
      <Button first onPress={() => navigation.navigate('CourseViewAll')}>
        <Text>Kỹ năng</Text>
      </Button>
      <Button last onPress={() => navigation.navigate('CourseViewAll')}>
        <Text>Chức vụ</Text>
      </Button>
      <Button last onPress={() => navigation.navigate('CourseViewAll')}>
        <Text>D.nghiệp</Text>
      </Button>
      <Button last onPress={() => navigation.navigate('CourseViewAll')}>
        <Text>My course</Text>
      </Button>
    </CustomSegment>
  );
};

export default CourseTab;
