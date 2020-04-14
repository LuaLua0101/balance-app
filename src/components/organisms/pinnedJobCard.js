import React from 'react';
import {Card, CardItem, Text, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {JobCard} from '.';

const SimpleBlock = props => {
  return (
    <Card transparent>
      <CardItem style={{backgroundColor: '#4dc4ff'}}>
        <Grid>
          <Col size={75}>
            <Text style={{fontSize: 18, color: '#fff'}}>Việc dành cho bạn</Text>
          </Col>
          <Col size={25}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  textDecorationLine: 'underline',
                }}>
                Xem thêm>>
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </CardItem>
      <View style={{padding: 10, backgroundColor: '#4dc4ff'}}>
        <JobCard {...props.data} />
      </View>
    </Card>
  );
};

export default SimpleBlock;
