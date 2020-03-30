import React from 'react';
import MainHeader from '../../../menu';
import {SavedCompanies, SavedCourses, SavedJobs} from '../templates';
import {Container, Icon, TabHeading, Tab, Tabs, Text} from 'native-base';

const Bookmark = props => {
  return (
    <MainHeader>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#4dc4ff'}}>
              <Icon name="camera" />
              <Text>K/H đã lưu</Text>
            </TabHeading>
          }>
          <SavedCourses />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#4dc4ff'}}>
              <Icon name="camera" />
              <Text>D/N đã lưu</Text>
            </TabHeading>
          }>
          <SavedCompanies />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#4dc4ff'}}>
              <Icon name="camera" />
              <Text>Việc đã lưu</Text>
            </TabHeading>
          }>
          <SavedJobs />
        </Tab>
      </Tabs>
    </MainHeader>
  );
};

export default Bookmark;
