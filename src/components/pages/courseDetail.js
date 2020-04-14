import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  WebView,
  Linking,
} from 'react-native';
import {Footer, FooterTab, Button, Spinner} from 'native-base';
import MainHeader from '../../../menu';
import {MenuTab, Syllabus, CourseRating, CommentList} from '../organisms';
import {Rating} from 'react-native-ratings';
import {Col, Grid} from 'react-native-easy-grid';
import axios from '../../utilities/axios';
import {useRoute} from '@react-navigation/native';
import {toCurrency} from '../../utilities/regex';
import HTML from 'react-native-render-html';
import * as cnt from '../../utilities/constants';
import HTMLView from 'react-native-htmlview';
import {Tile} from 'react-native-elements';

const CourseDetail = props => {
  const [modalRating, setModalRating] = useState(false);
  const [data, setData] = useState();
  const route = useRoute();

  useEffect(() => {
    axios
      .get('getCourseDetail/' + route.params.id)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, [route.params.id]);

  const openModalRating = () => {
    setModalRating(true);
  };

  const closeModalRating = () => {
    setModalRating(false);
  };

  return (
    <>
      <MainHeader>
        {data ? (
          <>
            <MenuTab course />
            <ScrollView>
              <CourseRating
                modal={modalRating}
                openModal={openModalRating}
                closeModal={closeModalRating}
              />
              <View style={styles.container}>
                <View style={styles.header}>
                  <Tile
                    imageSrc={{
                      uri:
                        cnt.API_URL + 'public/admins/img/courses/' + data.cover,
                    }}
                    title={data.title}
                  />
                </View>
                <View style={styles.postContent}>
                  <Text style={styles.tags}>
                    {toCurrency(parseInt(data.price))} vnđ
                  </Text>
                  {data.description && <HTMLView value={data.description} />}
                  <Grid>
                    <Col size={15}>
                      <Rating startingValue={5} imageSize={25} readonly />
                    </Col>
                    <Col size={25}>
                      <Text>
                        {'  '}
                        {data.review_count} lượt đánh giá
                      </Text>
                    </Col>
                  </Grid>
                  <Text style={styles.date}>2017-11-27 13:03:01</Text>
                  <Text style={styles.date}>{data.buy_count} lượt mua</Text>
                  <View style={styles.profile}>
                    {data['author'] && (
                      <Image
                        style={styles.avatar}
                        source={{
                          uri:
                            cnt.API_URL +
                            'public/admins/img/authors' +
                            '/' +
                            data['author'].avatar,
                        }}
                      />
                    )}
                    <Text style={styles.name}>
                      {data['author'] && data['author'].name}
                    </Text>
                  </View>
                </View>
                {/* <Syllabus style={{alignItems: 'center'}} /> */}
              </View>
              {/* <View style={styles.container}>
                <View style={styles.header2}>
                  <Text style={styles.headerTitle}>Đánh giá khóa học</Text>
                </View>
                <CommentList />
              </View> */}
            </ScrollView>
            <Footer style={{height: 40}}>
              <FooterTab>
                <Button
                  style={{height: 40, backgroundColor: '#4dc4ff'}}
                  onPress={openModalRating}>
                  <Text>Lưu lại</Text>
                </Button>
                <Button
                  style={{height: 40, backgroundColor: '#8bc94d'}}
                  onPress={() =>
                    Linking.openURL(data.url).catch(err =>
                      console.error('An error occurred', err),
                    )
                  }>
                  <Text>Vào học ngay</Text>
                </Button>
              </FooterTab>
            </Footer>
          </>
        ) : (
          <Spinner />
        )}
      </MainHeader>
    </>
  );
};

export default CourseDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#4dc4ff',
  },
  header2: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#8bc94d',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  postContent: {
    flex: 1,
    padding: 15,
  },
  postTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
  tags: {fontSize: 24, color: '#4dc4ff', marginTop: 10, fontWeight: 'bold'},
  date: {
    color: '#696969',
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#4dc4ff',
  },
  profile: {
    flexDirection: 'row',
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: '#4dc4ff',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 10,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#4dc4ff',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
