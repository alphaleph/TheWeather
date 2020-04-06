import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack, {MainStackParamList} from './MainStack';
import SettingsTabs, {SettingsTabsParamList} from './SettingsTabs';
import About from '../screens/About';
import Terms from '../screens/Terms';
import Privacy from '../screens/Privacy';

export type MainDrawerParamList = {
  MainStack: MainStackParamList;
  SettingsTabs: SettingsTabsParamList;
  About: undefined;
  Terms: undefined;
  Privacy: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{drawerLabel: 'Home Stack'}}
      />
      <Drawer.Screen
        name="SettingsTabs"
        component={SettingsTabs}
        options={{drawerLabel: 'Settings Tabs'}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'About'}}
      />
      <Drawer.Screen
        name="Terms"
        component={Terms}
        options={{drawerLabel: 'Terms'}}
      />
      <Drawer.Screen
        name="Privacy"
        component={Privacy}
        options={{drawerLabel: 'Privacy'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
