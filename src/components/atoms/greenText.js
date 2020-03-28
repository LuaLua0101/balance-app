import styled from 'styled-components';
import {Text} from 'react-native';
import React from 'react';

const GreenText = styled(Text)`
  color: ${props => props.theme.subColor};
`;

export default props => (
  <GreenText
    style={
      props.title && {
        fontSize: 18,
        fontWeight: 'bold',
      }
    }>
    {props.children}
  </GreenText>
);
