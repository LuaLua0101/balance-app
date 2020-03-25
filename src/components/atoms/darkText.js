import styled from 'styled-components';
import {Text} from 'native-base';
import React from 'react';

const DarkText = styled(Text)`
  color: ${props => props.theme.darkColor};
`;

export default props => (
  <DarkText
    style={
      props.title && {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      }
    }>
    {props.children}
  </DarkText>
);
