import React from 'react';
import MainHeader from '../../../menu';
import {
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
} from 'native-base';
import {UserInfoTab} from '../organisms';
import * as Progress from 'react-native-progress';
import {ButtonGreenCenter} from '../atoms';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CVList} from '../templates';

const MyCV = props => {
  const navigation = useNavigation();
  const openResult = () => {
    navigation.navigate('Result');
  };

  return (
    <MainHeader>
      <UserInfoTab two />
      <Content padder>
        <CVList />
        {/* <List>
          <ListItem>
            <Body>
              <Text>Mức độ hoàn thiện hồ sơ : 50%</Text>
              <Progress.Bar progress={0.5} width={null} />
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={require('../../../assest/ref.png')} />
            </Left>
            <Body>
              <Text>Giới thiệu bản thân</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì đó
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../assest/bachelor.png')}
              />
            </Left>
            <Body>
              <Text>Bằng cấp</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={require('../../../assest/skill.png')} />
            </Left>
            <Body>
              <Text>Kỹ năng chuyên môn</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì đó
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../assest/salary.png')}
              />
            </Left>
            <Body>
              <Text>Mức lương mong muốn</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì đó
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../assest/worker.png')}
              />
            </Left>
            <Body>
              <Text>Chức vụ mong muốn</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì đó
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../assest/schedule.png')}
              />
            </Left>
            <Body>
              <Text>Tính chất công việc</Text>
              <Text note numberOfLines={5}>
                Ghi cái gì đó
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Sửa</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <ButtonGreenCenter
              text="Sửa thông tin cá nhân"
              onPress={openResult}
            />
          </ListItem>
        </List> */}
      </Content>
    </MainHeader>
  );
};

export default MyCV;
