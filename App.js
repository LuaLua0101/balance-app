import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';
import {GlobalStateProvider, dispatch} from './store';
import DropdownAlert from 'react-native-dropdownalert';
import firebase from 'react-native-firebase';

const createNotificationListener = () => {
  firebase.notifications().onNotification(notification => {
    notification.android.setChannelId('insider').setSound('default');
    firebase.notifications().displayNotification(notification);
  });
};

const channel = new firebase.notifications.Android.Channel(
  'insider',
  'insider channel',
  firebase.notifications.Android.Importance.Max,
);
firebase.notifications().android.createChannel(channel);
createNotificationListener();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <GlobalStateProvider>
          <ThemeProvider theme={theme}>
            <Container>
              <Routes />
            </Container>
          </ThemeProvider>
          <DropdownAlert
            ref={ref => {
              dispatch({
                type: 'init_configs',
                config: {alert: ref},
              });
            }}
          />
        </GlobalStateProvider>
      </>
    );
  }
}

export default App;
