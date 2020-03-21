import React from 'react';
import {Content, List, ListItem, Text, Badge} from 'native-base';
import {MenuTab} from '../organisms';
import {MainHeader} from '../../../menu';

const Notify = props => {
  return (
    <MainHeader>
      <MenuTab />
      <Content padder>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
            <Badge style={{width: 12, height: 12}}></Badge>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Content>
    </MainHeader>
  );
};

export default Notify;
