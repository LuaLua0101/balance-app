import React from 'react';
import {Content} from 'native-base';
import {JobCard} from '../organisms';

const SavedJobs = props => {
  return (
    <Content padder>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </Content>
  );
};

export default SavedJobs;
