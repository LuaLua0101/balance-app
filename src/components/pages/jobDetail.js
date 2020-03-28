import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Logo, ButtonGreenCenter, ButtonShowMore} from '../atoms';
import {
  Icon,
  Content,
  Form,
  Item,
  Picker,
  Spinner,
  Card,
  CardItem,
  H3,
  Body,
  List,
  ListItem,
  Thumbnail,
  Left,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab, MenuTab} from '../organisms';
import DatePicker from 'react-native-datepicker';
import {EditUserInfoForm} from '../templates';
import {Col, Grid} from 'react-native-easy-grid';

const JobDetail = props => {
  return (
    <MainHeader>
      <Content padder>
        <View style={styles.container}>
          <Logo
            source={require('../../../assets/logo.png')}
            style={{height: 200}}
          />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <Card
              style={{
                marginTop: 30,
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>công ty Balance</Text>
                  <ButtonShowMore text="Theo dõi" />
                </View>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <View style={styles.bodyContent}>
                  <H3>Nhân viên tư vấn chăm sóc khách hàng</H3>
                  <Text>2000 lượt ứng tuyển</Text>
                  <Text>
                    dòng giới thiệu 3 dòng giới thiệu 3dòng giới thiệu 3dòng
                    giới thiệu 3dòng giới thiệu 3dòng giới thiệu 3dòng giới
                    thiệu 3
                  </Text>
                </View>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Mức lương</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Yêu cầu bằng cấp</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Tính chất công việc</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Địa chỉ</Text>
                      <Text note numberOfLines={3}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Kỹ năng chuyên môn yêu cầu</Text>
                      <Text note numberOfLines={3}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
            <Grid
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Col size={50}>
                <Card>
                  <CardItem bordered>
                    <Text>Quyền lợi</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>//Your text here</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col size={50}>
                <Card>
                  <CardItem bordered>
                    <Text>Yêu cầu công việc</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>//Your text here</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Grid>
            <Card
              style={{
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <CardItem>
                <Content>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../../../assets/bachelor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Hạn nộp hồ sơ</Text>
                      <Text note numberOfLines={3}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </CardItem>
            </Card>
          </View>
        </View>
      </Content>
      <Footer style={{height: 40}}>
        <FooterTab>
          <Button style={{height: 40, backgroundColor: '#4dc4ff'}}>
            <Text>Lưu lại</Text>
          </Button>
          <Button style={{height: 40, backgroundColor: '#8bc94d'}}>
            <Text>Ứng tuyển</Text>
          </Button>
        </FooterTab>
      </Footer>
    </MainHeader>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#8b929b',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    color: '#8b929b',
    marginTop: 10,
  },
  icon: {
    fontSize: 26,
    color: '#8bc94d',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#4dc4ff',
  },
});
