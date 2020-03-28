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
import {MenuTab, SearchBar} from '../organisms';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const JobCard = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('JobDetail')}>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../../assets/banlatrieuphu.jpg')} />
            <Body>
              <Text>Nhân viên kinh doanh</Text>
              <Text note>Hồ Chí Minh</Text>
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
              <Text>8-36 triệu</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>2000 ứng tuyển</Text>
            </Button>
          </Body>
          <Right>
            <Text>11 giờ trước</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default JobCard;
