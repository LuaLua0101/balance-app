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
import * as cnt from '../../utilities/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {toCurrency} from '../../utilities/regex';

const CourseCard = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CourseDetail', {
          id: props.id,
        })
      }>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Body>
              <Text>{props.title}</Text>
              <Text note>Nguyễn Anh Duy</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{
                uri: cnt.API_URL + 'public/admins/img/courses/' + props.cover,
              }}
              style={{height: 100, width: '100%', flex: 1}}
            />
            <Text>{props.short_description}...</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent>
              <Icon type="MaterialIcons" name="attach-money" />
              <Text>{toCurrency(props.price)}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{props.buy_count} người học</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default CourseCard;
