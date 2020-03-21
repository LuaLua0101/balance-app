import React from 'react';
import {MainHeader} from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock} from '../organisms';
import * as cnt from '../../utilities/constants';

const Job = props => {
  return (
    <MainHeader>
      <MenuTab />
      <Content padder>
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} />
        <SimpleBlock type={cnt.VIECGANBAN} />
        <SimpleBlock type={cnt.DNCANBAN} />
        <SimpleBlock type={cnt.BANLAAI} />
      </Content>
    </MainHeader>
  );
};

export default Job;
