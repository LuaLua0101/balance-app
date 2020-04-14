// import React from 'react';
// import {Card, CardContent, CardImage} from 'react-native-cards';
// import styled from 'styled-components';
// import {TouchableOpacity} from 'react-native';

// const CustomCard = styled(Card)`
//   width: 150px;
// `;

// export default props => (
//   <TouchableOpacity onPress={props.routing}>
//     <CustomCard>
//       <CardImage source={{uri: props.uri}} />
//       <CardContent text={props.text} />
//     </CustomCard>
//   </TouchableOpacity>
// );

import * as React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const MyComponent = props => (
  <TouchableOpacity onPress={props.routing}>
    <Card style={{width: 150, marginRight: 10, marginBottom: 1, height: 180}}>
      <Card.Cover
        source={{uri: props.uri}}
        style={{flex: 1, width: 150, height: 70, resizeMode: 'contain'}}
      />
      <Card.Content>
        <Paragraph
          style={{
            fontWeight: 'bold',
            marginLeft: -10,
            marginRight: -10,
            height: 45,
          }}>
          {props.text}
        </Paragraph>
        {props.price ? (
          <Paragraph
            style={{
              color: 'red',
              marginLeft: -10,
              marginRight: -10,
              fontSize: 12,
            }}>
            {props.price + ' VNĐ'}
          </Paragraph>
        ) : (
          <Paragraph />
        )}
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default MyComponent;
