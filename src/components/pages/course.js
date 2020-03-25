import React from 'react';
import {Content, Card, CardItem, Body} from 'native-base';
import MainHeader from '../../../menu';
import {CourseTab, MenuTab, SimpleBlock, SearchBar} from '../organisms';
import * as cnt from '../../utilities/constants';
import {DarkText as Text} from '../atoms';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  shadow-color: #808080;
  shadow-opacity: 0.5;
  elevation: 10;
`;

const Course = props => {
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
              <Text>dòng giới thiệu 1</Text>
              <Text>dòng giới thiệu 2</Text>
              <Text>dòng giới thiệu 3</Text>
            </Body>
          </CardItem>
        </CustomCard>
        <SimpleBlock type={cnt.CHUDEKHOAHOC} />
        <SimpleBlock type={cnt.KYNANGMEMHOT} />
        <SimpleBlock type={cnt.KHQUANLY} />
        <SimpleBlock type={cnt.DNTHIEUBAN} />
        <SimpleBlock type={cnt.HOCDELUONGCAO} />
      </Content>
      <MenuTab course />
    </MainHeader>
  );
};

export default Course;
