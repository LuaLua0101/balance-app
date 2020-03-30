import React from 'react';
import MainHeader from '../../../menu';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {Image} from 'react-native';
import {MenuTab, SearchBar} from '.';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const TestCard = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CourseDetail')}>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Body>
              <Text>Tài liệu lập trình PHP</Text>
              <Text note>{props.document ? 'Tài liệu' : 'Bài test'}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Image
              source={require('../../../assets/thumbnailjob.jpg')}
              style={{height: 100, width: '100%', flex: 1}}
            />
            <Text>
              Tìm kiếm khách hàng qua online hoặc trực tiếp Liên hệ khách hàng
              hoặc trực tiếp gặp mặt...
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Left>
            <Button transparent>
              <Icon type="MaterialIcons" name="attach-money" />
              <Text>200,000đ</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>2000 người mua</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default TestCard;
