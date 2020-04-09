import React, {useEffect, useState} from 'react';
import MainHeader from '../../../menu';
import {Content, Spinner} from 'native-base';
import {MenuTab, SearchBar, TestCard} from '../organisms';
import axios from '../../utilities/axios';
import * as cnt from '../../utilities/constants';

const TestViewAll = props => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('getTests/2')
      .then(res => {
        if (res.status === 200) {
          setData(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MainHeader>
      <MenuTab test />
      <SearchBar />
      <Content padder>
        {data ? (
          data.map((item, index) => {
            return <TestCard key={index} {...item} />;
          })
        ) : (
          <Spinner />
        )}
      </Content>
    </MainHeader>
  );
};

export default TestViewAll;
