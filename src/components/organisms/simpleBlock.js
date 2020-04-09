import React, {useState, useEffect} from 'react';
import {Card, CardItem, Body, Spinner} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Card as Card2, CardNoImage, GreenText, ButtonShowMore} from '../atoms';
import * as cnt from '../../utilities/constants';
import axios from '../../utilities/axios';
import {useNavigation} from '@react-navigation/native';

const SimpleBlock = props => {
  const navigation = useNavigation();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(props.type)
      .then(res => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const more = () => {
    const route =
      props.page == 'jobs'
        ? 'JobViewAll'
        : props.page == 'courses'
        ? 'CourseViewAll'
        : props.page == 'tests'
        ? 'TestViewAll'
        : '';

    route != '' && navigation.navigate(route);
  };

  return data ? (
    <Card
      transparent
      style={{
        shadowColor: '#808080',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 10,
      }}>
      <CardItem header bordered>
        <Grid>
          <Col size={75}>
            <GreenText title>{data && data.title}</GreenText>
          </Col>
          <Col size={25}>
            <ButtonShowMore text="Xem thêm" onPress={more} />
          </Col>
        </Grid>
      </CardItem>
      <CardItem bordered>
        <Body>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.data &&
              data.data.map((item, index) => {
                const cover = item.cover
                  ? item.cover
                  : item.avatar
                  ? item.avatar
                  : item.logo
                  ? item.logo
                  : null;

                const route =
                  props.page == 'jobs'
                    ? 'Job'
                    : props.page == 'courses'
                    ? 'Course'
                    : '';

                const routing = () => {
                  route != '' &&
                    navigation.navigate(route + 'Detail', {
                      id: item.id,
                    });
                };

                return props.page ? (
                  <Card2
                    routing={routing}
                    key={index}
                    uri={
                      cnt.API_URL +
                      'public/admins/img/' +
                      props.page +
                      '/' +
                      cover
                    }
                    text={item.title ? item.title : item.name ? item.name : ''}
                  />
                ) : (
                  <CardNoImage
                    routing={routing}
                    key={index}
                    text={item.title ? item.title : item.name ? item.name : ''}
                  />
                );
              })}
          </ScrollView>
        </Body>
      </CardItem>
    </Card>
  ) : (
    <Spinner />
  );
};

export default SimpleBlock;
