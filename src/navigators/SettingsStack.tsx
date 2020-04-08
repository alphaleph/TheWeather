import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsTabs, {SettingsTabsParamList} from './SettingsTabs';
import DrawerButton from '../components/DrawerButton';

export type SettingsStackParamList = {
  SettingsTabs: SettingsTabsParamList;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5FDD9D',
        },
        headerTintColor: '#1E2322',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => {
          return <DrawerButton />;
        },
      }}>
      <Stack.Screen name="SettingsTabs" component={SettingsTabs} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
