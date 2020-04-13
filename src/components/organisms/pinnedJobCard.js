import React, {useState, useEffect} from 'react';
import {Card, CardItem, Body, Spinner, Text, View} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Card as Card2, CardNoImage, GreenText, ButtonShowMore} from '../atoms';
import * as cnt from '../../utilities/constants';
import axios from '../../utilities/axios';
import {useNavigation} from '@react-navigation/native';
import {JobCard} from '.';

const SimpleBlock = props => {
  const navigation = useNavigation();
  const [data, setData] = useState();

  return (
    <Card transparent>
      <CardItem header style={{backgroundColor: '#4dc4ff'}}>
        <Grid>
          <Col size={75}>
            <Text style={{fontSize: 20, color: '#fff'}}>Việc dành cho bạn</Text>
          </Col>
          <Col size={25}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  textDecorationLine: 'underline',
                }}>
                Xem thêm>>
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </CardItem>
      <View style={{padding: 10, backgroundColor: '#4dc4ff'}}>
        <JobCard {...props.data} />
      </View>
    </Card>
  );
};

export default SimpleBlock;
