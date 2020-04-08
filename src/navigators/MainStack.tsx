import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs, {HomeTabsParamList} from './HomeTabs';
import HomeHeaderTitleButton from '../components/HomeHeaderTitleButton';
import DrawerButton from '../components/DrawerButton';

export type MainStackParamList = {
  HomeTabs: HomeTabsParamList;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <DrawerButton />;
        },
      }}>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerTitle: () => {
            return <HomeHeaderTitleButton />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
