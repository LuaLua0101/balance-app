import React, {useEffect, useState} from 'react';
import MainHeader from '../../../menu';
import {Content, Spinner} from 'native-base';
import {MenuTab, SearchBar, CourseCard} from '../organisms';
import axios from '../../utilities/axios';

const CourseViewAll = props => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('getCourses/2')
      .then(res => {
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MainHeader>
      <MenuTab course />
      <SearchBar />
      <Content padder>
        {data ? (
          data.map((item, index) => {
            return <CourseCard key={index} {...item} />;
          })
        ) : (
          <Spinner />
        )}
      </Content>
    </MainHeader>
  );
};

export default CourseViewAll;
