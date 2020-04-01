import React, {useState, useEffect} from 'react';
import {Card, CardItem, Body} from 'native-base';
import {ScrollView} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Card as Card2, DarkText, GreenText, ButtonShowMore} from '../atoms';
import * as cnt from '../../utilities/constants';

const SimpleBlock = props => {
  const [data, setData] = useState({
    title: 'Khóa học tuyệt vời',
    data: [
      {
        id: 1,
        uri:
          'https://nghiencuuquocte.org/wp-content/uploads/2019/03/science.jpg',
        text: 'hinh 1',
      },
      ,
      {
        id: 1,
        uri:
          'https://nghiencuuquocte.org/wp-content/uploads/2019/03/science.jpg',
        text: 'hinh 1',
      },
      ,
      {
        id: 1,
        uri:
          'https://nghiencuuquocte.org/wp-content/uploads/2019/03/science.jpg',
        text: 'hinh 1',
      },
    ],
  });

  useEffect(() => {}, []);

  return (
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
            <ButtonShowMore text="Xem thêm" onPress={props.more} />
          </Col>
        </Grid>
      </CardItem>
      <CardItem bordered>
        <Body>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.data &&
              data.data.map((item, index) => {
                return <Card2 key={index} uri={item.uri} text={item.text} />;
              })}
          </ScrollView>
        </Body>
      </CardItem>
    </Card>
  );
};

export default SimpleBlock;
