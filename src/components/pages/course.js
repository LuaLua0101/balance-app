import React from 'react';
import {Content, Card, CardItem, Body} from 'native-base';
import {MainHeader} from '../../../menu';
import {CourseTab, MenuTab, SimpleBlock} from '../organisms';
import * as cnt from '../../utilities/constants';
import {DarkText as Text} from '../atoms';

const Course = props => {
  return (
    <MainHeader>
      <CourseTab />
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>dòng giới thiệu 1</Text>
              <Text>dòng giới thiệu 2</Text>
              <Text>dòng giới thiệu 3</Text>
            </Body>
          </CardItem>
        </Card>
        <SimpleBlock type={cnt.CHUDEKHOAHOC} />
        <SimpleBlock type={cnt.KYNANGMEMHOT} />
        <SimpleBlock type={cnt.KHQUANLY} />
        <SimpleBlock type={cnt.DNTHIEUBAN} />
        <SimpleBlock type={cnt.HOCDELUONGCAO} />
      </Content>
      <MenuTab />
    </MainHeader>
  );
};

export default Course;
