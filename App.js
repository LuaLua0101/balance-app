import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {GlobalStateProvider, dispatch} from './store';
import DropdownAlert from 'react-native-dropdownalert';
import firebase from 'react-native-firebase';
import {Provider as PaperProvider} from 'react-native-paper';

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
          <PaperProvider>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
            <DropdownAlert
              ref={ref => {
                dispatch({
                  type: 'init_configs',
                  config: {alert: ref},
                });
              }}
            />
          </PaperProvider>
        </GlobalStateProvider>
      </>
    );
  }
}

export default App;
