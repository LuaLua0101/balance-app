import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MenuTab = props => {
  const navigation = useNavigation();
  return (
    <Appbar style={[styles.top, styles.color]} dark={true}>
      <Appbar.Action
        style={[styles.block]}
        icon="home"
        color={props.main ? '#fff' : '#8b929b'}
        onPress={() => navigation.navigate('Main')}
      />
      <Appbar.Action
        style={[styles.block]}
        icon="library-books"
        color={props.course ? '#fff' : '#8b929b'}
        onPress={() => navigation.navigate('Course')}
      />
      <Appbar.Action
        style={[styles.block]}
        icon="note-multiple"
        color={props.job ? '#fff' : '#8b929b'}
        onPress={() => navigation.navigate('Job')}
      />
      <Appbar.Action
        style={[styles.block]}
        icon="palette-swatch"
        color={props.test ? '#fff' : '#8b929b'}
        onPress={() => navigation.navigate('TestEbook')}
      />
    </Appbar>
  );
};

export default MenuTab;

const styles = StyleSheet.create({
  block: {
    width: Dimensions.get('window').width / 5,
  },
  top: {
    left: 0,
    right: 0,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  color: {
    backgroundColor: '#4dc4ff',
  },
});
