import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Main,
  Login,
  Register,
  Course,
  Job,
  TestEbook,
  Notify,
  UserInfo,
  MyCV,
  JobViewAll,
  Result,
  JobDetail,
  CourseViewAll,
  CourseDetail,
  TestViewAll,
} from './src/components/pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="TestEbook" component={TestEbook} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="MyCV" component={MyCV} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="JobViewAll" component={JobViewAll} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="CourseViewAll" component={CourseViewAll} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="TestViewAll" component={TestViewAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
