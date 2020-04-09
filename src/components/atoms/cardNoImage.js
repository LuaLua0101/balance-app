import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';

const CustomText = styled(Text)`
  color: ${props => props.theme.mainColor};
`;

export default props => (
  <TouchableOpacity onPress={props.routing}>
    <Card>
      <CardItem>
        <Body>
          <CustomText>{props.text}</CustomText>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);
