import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs, {HomeTabsParamList} from './HomeTabs';
import LocationsStack, {LocationsStackParamList} from './LocationsStack';

export type MainStackParamList = {
  HomeTabs: HomeTabsParamList;
  LocationsStack: LocationsStackParamList;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5FDD9D',
        },
        headerTintColor: '#1E2322',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="LocationsStack" component={LocationsStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
