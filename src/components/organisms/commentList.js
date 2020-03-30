import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Rating} from 'react-native-ratings';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          name: 'Frank Odalthh',
          rating: 3,
          time: '1 giờ trước',
          comment:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        },
      ],
    };
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={item => {
          const Notification = item.item;
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.image}
                  source={{uri: Notification.image}}
                />
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={styles.name}>{Notification.name}</Text>
                  <Rating
                    startingValue={Notification.rating}
                    imageSize={15}
                    readonly
                  />
                  <Text style={styles.time}>{Notification.time}</Text>
                </View>
                <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
