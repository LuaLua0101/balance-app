import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {Content} from 'native-base';
import {MenuTab} from '../organisms';
import MainHeader from '../../../menu';
import moment from 'moment';
import 'moment/locale/vi';

moment.locale('vi');

const Notify = props => {
  const [data, setData] = useState([
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      completed: 1,
    },
    {
      id: 2,
      description: 'Aenean massa. Cum sociis natoque penatibus et magnis.',
      completed: 0,
    },
  ]);

  const clickEventListener = item => {
    Alert.alert('Item selected: ' + item.description);
  };

  const __getCompletedIcon = item => {
    if (item.completed == 1) {
      return 'https://img.icons8.com/flat_round/64/000000/checkmark.png';
    } else {
      return 'https://img.icons8.com/flat_round/64/000000/delete-sign.png';
    }
  };

  const __getDescriptionStyle = item => {
    if (item.completed === 1) {
      return {
        fontStyle: 'italic',
        color: '#808080',
      };
    }
  };

  const __getLineStyle = item => {
    return item.completed === 0
      ? {borderColor: '#228B22'}
      : {borderColor: '#808080'};
  };

  return (
    <MainHeader>
      <MenuTab />
      <View style={styles.container}>
        <FlatList
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.card, __getLineStyle(item)]}
                onPress={() => {
                  clickEventListener(item);
                }}>
                {/* <Image
                  style={styles.image}
                  source={{uri: __getCompletedIcon(item)}}
                /> */}
                <View style={styles.cardContent}>
                  <Text
                    style={[styles.description, __getDescriptionStyle(item)]}>
                    {item.description}
                  </Text>
                  {/* <Text style={styles.date}>
                    {moment(item.date, 'YYYY-MM-DD, h:mm:ss').fromNow()}
                  </Text> */}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainHeader>
  );
};

export default Notify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  tasks: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 10,
    // marginTop: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  card: {
    // shadowColor: '#00000021',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 12,

    marginVertical: 2,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderLeftWidth: 6,
  },
  description: {
    fontSize: 16,
    flex: 1,
    color: '#008080',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: '#696969',
    marginTop: 5,
  },
});
