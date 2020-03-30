import React from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SearchBar, TestCard} from '../organisms';

const TestViewAll = props => {
  return (
    <MainHeader>
      <MenuTab test />
      <SearchBar />
      <Content padder>
        <TestCard document />
        <TestCard />
        <TestCard document />
        <TestCard />
      </Content>
    </MainHeader>
  );
};

export default TestViewAll;
