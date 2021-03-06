import React, {useState, useEffect} from 'react';
import {Card, CardItem, Body, Spinner, Text} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Card as Card2, CardNoImage} from '../atoms';
import * as cnt from '../../utilities/constants';
import axios from '../../utilities/axios';
import {useNavigation} from '@react-navigation/native';
import {toCurrency} from '../../utilities/regex';

const SimpleBlock = props => {
  const navigation = useNavigation();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(props.type)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
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
      <CardItem header>
        <Grid>
          <Col size={75}>
            <Text style={{fontWeight: 'bold'}}>{data && data.title}</Text>
          </Col>
          <Col size={25}>
            <TouchableOpacity onPress={more}>
              <Text
                style={{
                  fontSize: 14,
                  textDecorationLine: 'underline',
                }}>
                Xem thêm>>
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </CardItem>
      <CardItem>
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

                const price = item.price
                  ? parseInt(item.price)
                  : item.salary_from
                  ? parseInt(item.salary_from) +
                    ' - ' +
                    parseInt(item.salary_to)
                  : null;

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
                    price={price ? toCurrency(price) : null}
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
