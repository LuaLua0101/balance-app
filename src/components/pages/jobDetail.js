import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Logo} from '../atoms';
import {
  Content,
  Card,
  CardItem,
  H3,
  Body,
  ListItem,
  Thumbnail,
  Left,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import MainHeader from '../../../menu';
import {MenuTab} from '../organisms';
import {Col, Grid} from 'react-native-easy-grid';
import axios from '../../utilities/axios';
import {useRoute} from '@react-navigation/native';
import * as cnt from '../../utilities/constants';
import HTML from 'react-native-render-html';

const JobDetail = props => {
  const route = useRoute();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('getJobDetail/' + route.params.id)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MainHeader>
      <MenuTab job />
      {data && (
        <>
          <Content>
            <View style={styles.container}>
              <Logo
                source={{
                  uri:
                    cnt.API_URL + 'public/admins/img/jobs' + '/' + data.cover,
                }}
                style={{height: 200}}
              />
              {data['company'] && (
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                      cnt.API_URL +
                      'public/admins/img/companies' +
                      '/' +
                      data['company'].logo,
                  }}
                />
              )}
              <View style={styles.body}>
                <Card
                  style={{
                    width: '95%',
                    marginTop: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  <CardItem>
                    <View style={styles.bodyContent}>
                      <Text style={styles.name}>
                        {data['company'] && data['company'].name}
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {data.title}
                      </Text>
                      <Text style={{fontSize: 16}}>
                        {data.apply_count} lượt ứng tuyển
                      </Text>
                      <HTML
                        html={data.description}
                        imagesMaxWidth={Dimensions.get('window').width}
                      />
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
                            source={require('../../../assets/thumbnailjob.jpg')}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Mô tả công việc
                          </Text>
                          <HTML
                            html={data.description}
                            imagesMaxWidth={Dimensions.get('window').width}
                          />
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
                            source={require('../../../assets/skill.png')}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Kỹ năng chuyên môn yêu cầu
                          </Text>
                          <HTML
                            html={data.requirements}
                            imagesMaxWidth={Dimensions.get('window').width}
                          />
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
                            source={require('../../../assets/salary.png')}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Mức lương
                          </Text>
                          <Text note numberOfLines={1}>
                            {parseInt(data.salary_from) +
                              ' - ' +
                              parseInt(data.salary_to)}{' '}
                            VNĐ
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
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Yêu cầu bằng cấp
                          </Text>
                          <Text note numberOfLines={1}>
                            {data['degree'] ? data['degree'].name : 'không có'}
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
                            source={require('../../../assets/schedule.png')}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Tính chất công việc
                          </Text>
                          <Text note numberOfLines={1}>
                            {data.job_type == 0
                              ? 'Toàn thời gian'
                              : 'Bán thời gian'}
                          </Text>
                        </Body>
                      </ListItem>
                    </Content>
                  </CardItem>
                </Card>
                {/* <Card
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
                            {data.requirements}
                          </Text>
                        </Body>
                      </ListItem>
                    </Content>
                  </CardItem>
                </Card> */}
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
                            source={require('../../../assets/worker.png')}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Hạn nộp hồ sơ
                          </Text>
                          <Text note numberOfLines={3}>
                            Ngày {data.end_date}
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
                    marginBottom: 10,
                  }}>
                  <Col size={50}>
                    <Card style={{height: 300}} bordered>
                      <CardItem>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                          Quyền lợi
                        </Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <ScrollView
                            nestedScrollEnabled={true}
                            style={{height: 250}}>
                            <HTML
                              html={data.benefits}
                              imagesMaxWidth={Dimensions.get('window').width}
                            />
                          </ScrollView>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col size={50}>
                    <Card style={{height: 250}} bordered>
                      <CardItem>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                          Yêu cầu công việc
                        </Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <ScrollView
                            nestedScrollEnabled={true}
                            style={{height: 250}}>
                            <HTML
                              html={data.requirements}
                              imagesMaxWidth={Dimensions.get('window').width}
                            />
                          </ScrollView>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Grid>
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
        </>
      )}
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
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#4dc4ff',
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
