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
import {Image, Linking} from 'react-native';
import {MenuTab, SearchBar} from '.';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {toCurrency} from '../../utilities/regex';
import * as cnt from '../../utilities/constants';

const TestCard = props => {
  const navigation = useNavigation();
  const folder = props.type != 0 ? 'ebooks' : 'tests';
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(props.url).catch(err =>
          console.error('An error occurred', err),
        )
      }>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Body>
              <Text>{props.title}</Text>
              <Text note>{props.type != 0 ? 'Tài liệu' : 'Bài test'}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{
                uri:
                  cnt.API_URL +
                  'public/admins/img/' +
                  folder +
                  '/' +
                  props.cover,
              }}
              style={{height: 100, width: '100%', flex: 1}}
            />
            <Text>{props.short_description}...</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent>
              {props.type == 0 && (
                <>
                  <Icon type="MaterialIcons" name="attach-money" />
                  <Text>{toCurrency(props.price)}</Text>
                </>
              )}
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Text>
                {props.buy_count ? props.buy_count : 0} lượt
                {props.type != 0 ? ' tải' : ' mua'}
              </Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default TestCard;
