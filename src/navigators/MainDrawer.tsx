import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack, {MainStackParamList} from './MainStack';
import SettingsStack, {SettingsStackParamList} from './SettingsStack';
import AboutStack from './AboutStack';
import PrivacyStack from './PrivacyStack';
import TermsStack from './TermsStack';
import LocationsStack, {LocationsStackParamList} from './LocationsStack';

export type MainDrawerParamList = {
  MainStack: MainStackParamList;
  LocationsStack: LocationsStackParamList;
  SettingsStack: SettingsStackParamList;
  AboutStack: undefined;
  TermsStack: undefined;
  PrivacyStack: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationsStack}
        options={{drawerLabel: 'My Locations'}}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{drawerLabel: 'Settings'}}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{drawerLabel: 'About'}}
      />
      <Drawer.Screen
        name="TermsStack"
        component={TermsStack}
        options={{drawerLabel: 'Terms'}}
      />
      <Drawer.Screen
        name="PrivacyStack"
        component={PrivacyStack}
        options={{drawerLabel: 'Privacy'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
