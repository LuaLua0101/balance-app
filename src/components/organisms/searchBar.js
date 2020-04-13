import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {View} from 'native-base';

export default class MyComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({searchQuery: query});

  render() {
    const {searchQuery} = this.state;
    return (
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#4dc4ff',
        }}>
        <Searchbar
          style={{borderRadius: 45, height: 35}}
          inputStyle={{
            fontSize: 12,
          }}
          placeholder="Tìm kiếm việc làm, nhà tuyển dụng"
          onChangeText={this._onChangeSearch}
          value={searchQuery}
        />
      </View>
    );
  }
}
