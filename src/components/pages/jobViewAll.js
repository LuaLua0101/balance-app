import React, {useEffect, useState} from 'react';
import MainHeader from '../../../menu';
import {Content, Spinner} from 'native-base';
import {MenuTab, SearchBar, JobCard} from '../organisms';
import axios from '../../utilities/axios';

const JobViewAll = props => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('getJobs')
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MainHeader>
      <MenuTab job />
      <SearchBar />
      <Content>
        <Content>
          {data ? (
            data.map((item, index) => {
              return <JobCard key={index} {...item} />;
            })
          ) : (
            <Spinner />
          )}
        </Content>
      </Content>
    </MainHeader>
  );
};

export default JobViewAll;
