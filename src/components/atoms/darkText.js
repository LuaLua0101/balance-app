import styled from 'styled-components';
import {Text} from 'native-base';
import React from 'react';

const DarkText = styled(Text)`
  color: ${props => props.theme.darkColor};
`;

export default props => <DarkText>{props.children}</DarkText>;
