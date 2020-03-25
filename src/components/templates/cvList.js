import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';

export default class CVList extends Component {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.card}>
          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Text style={styles.name}>Mức độ hoàn thiện hồ sơ : 50%</Text>
            <Progress.Bar progress={0.5} width={null} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.image}
            source={require('../../../assest/bachelor.png')}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Bằng cấp</Text>
            <Text style={styles.count}>33333</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.image}
            source={require('../../../assest/salary.png')}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Lương mong muốn</Text>
            <Text style={styles.count}>33333</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.image}
            source={require('../../../assest/skill.png')}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Kỹ năng</Text>
            <Text style={styles.count}>33333</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.image}
            source={require('../../../assest/worker.png')}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Vị trí mong muốn</Text>
            <Text style={styles.count}>33333</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.image}
            source={require('../../../assest/schedule.png')}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Thời gian làm việc</Text>
            <Text style={styles.count}>33333</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cardContent: {
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#3397d5',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    color: '#8b929b',
  },
  followButton: {
    marginTop: 10,
    height: 15,
    width: 70,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8fbd40',
  },
  followButtonText: {
    color: '#8fbd40',
    fontSize: 14,
  },
});
