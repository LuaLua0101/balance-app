import React from 'react';
import {Card, CardContent, CardImage} from 'react-native-cards';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

const CustomCard = styled(Card)`
  width: 200;
  shadow-color: #808080;
  shadow-opacity: 0.5;
  elevation: 10;
`;

const CustomCardImage = styled(CardImage)`
  shadow-color: #808080;
  shadow-opacity: 0.5;
  elevation: 10;
`;

export default props => (
  <TouchableOpacity onPress={props.routing}>
    <CustomCard>
      <CustomCardImage source={{uri: props.uri}} />
      <CardContent text={props.text} />
    </CustomCard>
  </TouchableOpacity>
);
