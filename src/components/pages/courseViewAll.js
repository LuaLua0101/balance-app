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
import {MenuTab, SearchBar, CourseCard} from '../organisms';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CourseViewAll = props => {
  return (
    <MainHeader>
      <MenuTab course />
      <SearchBar />
      <Content padder>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Content>
    </MainHeader>
  );
};

export default CourseViewAll;
