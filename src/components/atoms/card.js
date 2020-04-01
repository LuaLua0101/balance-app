import React from 'react';
import {Card, CardContent, CardImage} from 'react-native-cards';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

const CustomCard = styled(Card)`
  width: 150px;
`;

export default props => (
  <TouchableOpacity onPress={props.routing}>
    <CustomCard>
      <CardImage source={{uri: props.uri}} />
      <CardContent text={props.text} />
    </CustomCard>
  </TouchableOpacity>
);
