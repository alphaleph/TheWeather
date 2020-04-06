import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainDrawer, {MainDrawerParamList} from './MainDrawer';
import FullModal from '../screens/FullModal';

export type RootStackParamList = {
  FullModal: undefined;
  MainDrawer: MainDrawerParamList;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FullModal" component={FullModal} />
    </Stack.Navigator>
  );
};

export default RootStack;
