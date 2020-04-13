import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Col, Grid} from 'react-native-easy-grid';
import {View} from 'native-base';

const PinnedTestCard = props => {
  return (
    <View style={{marginTop: 5}}>
      <Grid>
        <Col size={40}>
          <Card>
            <Card.Cover
              source={{uri: 'https://picsum.photos/700'}}
              style={{height: 100}}
            />
          </Card>
        </Col>
        <Col size={60}>
          <Card style={{height: 100}}>
            <Card.Content>
              <Title>Tên bài test</Title>
              <Paragraph>Mô tả ngắn</Paragraph>
            </Card.Content>
          </Card>
        </Col>
      </Grid>
    </View>
  );
};

export default PinnedTestCard;
