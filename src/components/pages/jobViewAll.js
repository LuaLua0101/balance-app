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
import {MenuTab, SearchBar, JobCard} from '../organisms';
import {TouchableOpacity} from 'react-native-gesture-handler';

const JobViewAll = props => {
  return (
    <MainHeader>
      <MenuTab job />
      <SearchBar />
      <Content padder>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Content>
    </MainHeader>
  );
};

export default JobViewAll;
