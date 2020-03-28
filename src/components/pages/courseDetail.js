import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import MainHeader from '../../../menu';
import {MenuTab, Syllabus, CourseRating} from '../organisms';

const CourseDetail = props => {
  const [modalRating, setModalRating] = useState(false);

  const openModalRating = () => {
    setModalRating(true);
  };

  const closeModalRating = () => {
    setModalRating(false);
  };

  return (
    <>
      <MainHeader>
        <MenuTab course />
        <ScrollView>
          <CourseRating
            modal={modalRating}
            openModal={openModalRating}
            closeModal={closeModalRating}
          />
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Khoá học lập trình PHP nâng cao
              </Text>
            </View>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>Thông tin về khóa học</Text>
              <Text style={styles.postDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </Text>
              <Text style={styles.tags}>600,000 vnđ</Text>
              <Text style={styles.date}>2017-11-27 13:03:01</Text>
              <Text style={styles.date}>2000 lượt đăng ký</Text>

              <View style={styles.profile}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
                  }}
                />
                <Text style={styles.name}>Nguyễn Anh Duy</Text>
              </View>
            </View>
            <Syllabus style={{alignItems: 'center'}} />
          </View>
        </ScrollView>
        <Footer style={{height: 40}}>
          <FooterTab>
            <Button
              style={{height: 40, backgroundColor: '#4dc4ff'}}
              onPress={openModalRating}>
              <Text>Đánh giá</Text>
            </Button>
            <Button style={{height: 40, backgroundColor: '#8bc94d'}}>
              <Text>Đăng ký học</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#4dc4ff',
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
    padding: 30,
  },
  postTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
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
