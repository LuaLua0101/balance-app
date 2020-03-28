import React from 'react';
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';
import styled from 'styled-components';
import {DarkText} from '../atoms';
import {TouchableOpacity, Image} from 'react-native';

const CustomHeader = styled(Header)`
  background-color: ${props => props.theme.mainColor};
`;

const SearchBar = props => {
  return (
    <CustomHeader
      searchBar
      style={{
        height: 45,
      }}>
      <Item
        style={{
          borderRadius: 40,
          height: 30,
        }}>
        <Icon name="ios-search" />
        <Input
          placeholder="Nhập từ khóa cần tìm"
          style={{
            fontSize: 16,
          }}
        />
        <TouchableOpacity>
          <Icon
            name="closecircleo"
            type="AntDesign"
            style={{
              fontSize: 16,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
          }}>
          <Image
            style={{
              height: 25,
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'center',
            }}
            source={require('../../../assets/search.png')}
          />
        </TouchableOpacity>
      </Item>
    </CustomHeader>
  );
};

export default SearchBar;
