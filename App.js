import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';

const App = props => {
  return (
    <>
      <StatusBar hidden={true} />
      <ThemeProvider theme={theme}>
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
