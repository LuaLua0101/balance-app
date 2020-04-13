import React, {useEffect, useState} from 'react';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Spinner,
} from 'native-base';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from '../../utilities/axios';
import {toCurrency} from '../../utilities/regex';
import * as cnt from '../../utilities/constants';

const JobCard = props => {
  const navigation = useNavigation();

  return props ? (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('JobDetail', {
          id: props.id,
        })
      }>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../../assets/banlatrieuphu.jpg')} />
            <Body>
              <Text>{props.title}</Text>
              <Text note>
                {toCurrency(props.salary_from)}-{toCurrency(props.salary_to)}{' '}
                vnđ
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{
                uri: cnt.API_URL + 'public/admins/img/jobs' + '/' + props.cover,
              }}
              style={{height: 100, width: '100%', flex: 1}}
            />
            <Text note>{props.short_description}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent>
              {/* <Icon type="MaterialIcons" name="attach-money" /> */}
              {/* <Text>{props.province.name}</Text> */}
            </Button>
          </Left>
          <Body>
            <Button transparent>
              {/* <Icon active name="chatbubbles" /> */}
              <Text>{props.apply_count} ứng tuyển</Text>
            </Button>
          </Body>
          {/* <Right>
            <Text>11 giờ trước</Text>
          </Right> */}
        </CardItem>
      </Card>
    </TouchableOpacity>
  ) : (
    <Spinner />
  );
};

export default JobCard;
