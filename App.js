import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';
import {GlobalStateProvider} from './store';

const App = props => {
  return (
    <>
      <StatusBar hidden={true} />
      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </GlobalStateProvider>
    </>
  );
};

export default App;
