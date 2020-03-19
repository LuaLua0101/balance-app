import styled from 'styled-components';
import {Button, Text} from 'native-base';
import React from 'react';

const ButtonFilled = styled(Button)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 5;
  background-color: ${props => props.theme.mainColor};
`;

export default props => (
  <ButtonFilled onPress={props.onPress}>
    <Text style={{marginLeft: 'auto', marginRight: 'auto'}}>{props.text}</Text>
  </ButtonFilled>
);
