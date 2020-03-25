import React from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock, SearchBar} from '../organisms';
import * as cnt from '../../utilities/constants';

const TestEbook = props => {
  return (
    <MainHeader>
      <MenuTab test />
      <SearchBar />
      <Content padder>
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} />
        <SimpleBlock type={cnt.VIECGANBAN} />
        <SimpleBlock type={cnt.DNCANBAN} />
        <SimpleBlock type={cnt.BANLAAI} />
      </Content>
    </MainHeader>
  );
};

export default TestEbook;
