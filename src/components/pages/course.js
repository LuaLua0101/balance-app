import React from 'react';
import {Content, Card, CardItem, Body} from 'native-base';
import MainHeader from '../../../menu';
import {CourseTab, MenuTab, SimpleBlock, SearchBar} from '../organisms';
import * as cnt from '../../utilities/constants';
import {DarkText as Text} from '../atoms';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const CustomCard = styled(Card)`
  shadow-color: #808080;
  shadow-opacity: 0.5;
  elevation: 10;
`;

const Course = props => {
  const navigation = useNavigation();

  const toViewAll = () => {
    navigation.navigate('CourseViewAll');
  };

  return (
    <MainHeader>
      <SearchBar />
      <CourseTab />
      <Content padder>
        <CustomCard>
          <CardItem>
            <Body
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>
                Khát vọng Tăng thu nhập của người Việt trong top đầu các nước
                ASEAN
              </Text>
              <Text>
                Phát triển con người, Phát triển doanh nghiệp, Phát triển đất
                nước
              </Text>
            </Body>
          </CardItem>
        </CustomCard>
        <SimpleBlock type={cnt.CHUDEKHOAHOC} more={toViewAll} />
        <SimpleBlock type={cnt.KYNANGMEMHOT} more={toViewAll} page="courses" />
        <SimpleBlock type={cnt.KHQUANLY} more={toViewAll} page="courses" />
        <SimpleBlock type={cnt.DNTHIEUBAN} more={toViewAll} page="companies" />
        <SimpleBlock type={cnt.HOCDELUONGCAO} more={toViewAll} page="courses" />
      </Content>
      <MenuTab course />
    </MainHeader>
  );
};

export default Course;
