import React, {useEffect, useState} from 'react';
import {Thumbnail, Text, Button, Icon, Left, Body, Spinner} from 'native-base';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from '../../utilities/axios';
import {toCurrency} from '../../utilities/regex';
import * as cnt from '../../utilities/constants';
import {Card, Title, Paragraph} from 'react-native-paper';

const JobCard = props => {
  const navigation = useNavigation();

  return props ? (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('JobDetail', {
          id: props.id,
        })
      }>
      <Card>
        <Card.Cover
          source={{
            uri: cnt.API_URL + 'public/admins/img/jobs' + '/' + props.cover,
          }}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>{props.short_description}</Paragraph>
          <Paragraph>
            <Icon name="eye" type="AntDesign" style={{fontSize: 16}} />
            {props.view_count}
            {'  '}lượt xem {'     '}
            <Icon name="checkcircle" type="AntDesign" style={{fontSize: 14}} />
            {'  '}
            {props.apply_count} ứng tuyển
          </Paragraph>
          <Paragraph style={{color: 'red'}}>
            {toCurrency(props.salary_from)}-{toCurrency(props.salary_to)} VNĐ
          </Paragraph>
        </Card.Content>
      </Card>
      {/* <Card style={{flex: 0}}>
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
            <Button transparent />
          </Left>
          <Body>
            <Button transparent>
              <Text>{props.apply_count} ứng tuyển</Text>
            </Button>
          </Body>
        </CardItem>
      </Card> */}
    </TouchableOpacity>
  ) : (
    <Spinner />
  );
};

export default JobCard;
