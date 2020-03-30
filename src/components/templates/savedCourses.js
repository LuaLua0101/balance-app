import React from 'react';
import {Content} from 'native-base';
import {CourseCard} from '../organisms';

const SavedCourses = props => {
  return (
    <Content padder>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Content>
  );
};

export default SavedCourses;
