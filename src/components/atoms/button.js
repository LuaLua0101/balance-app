import styled from 'styled-components';
import {Button, Text} from 'native-base';
import React from 'react';

const ButtonFilled = styled(Button)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: ${props => props.theme.mainColor};
  &:hover {
    color: red;
  }
`;

export default props => (
  <ButtonFilled onPress={props.onPress}>
    <Text
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        textDecorationLine: props.link && 'underline',
      }}>
      {props.text}
    </Text>
  </ButtonFilled>
);
