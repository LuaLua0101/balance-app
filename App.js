import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';

class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
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
  }
}

export default App;
