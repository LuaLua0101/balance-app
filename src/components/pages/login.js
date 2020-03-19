import React from 'react';
import {Text, View, Spinner, Item, Icon} from 'native-base';
import styled from 'styled-components';
import {InputNormal as Input, ButtonFilled as Button, Logo} from '../atoms';

const Form = styled(View)`
  margin-top: 20px;
`;

const Login = props => {
  return (
    <View>
      <Logo source={require('../../../assest/logo.png')} />
      <Form>
        <Item>
          <Icon type="AntDesign" name="user" />
          <Input placeholder="số điện thoại" keyboardType="numeric" />
        </Item>
        <Item>
          <Icon type="AntDesign" name="lock" />
          <Input placeholder="mật khẩu" secureTextEntry={true} />
        </Item>
        <View>
          <Button
            text="Đăng nhập"
            onPress={() => props.navigation.navigate('Main')}
          />
        </View>
      </Form>
    </View>
  );
};

export default Login;
