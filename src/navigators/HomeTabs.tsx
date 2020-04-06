import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import NowForecast from '../screens/NowForecast';
import HourlyForecast from '../screens/HourlyForecast';
import TenDayForecast from '../screens/TenDayForecast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type HomeTabsParamList = {
  NowForecast: undefined;
  HourlyForecast: undefined;
  TenDayForecast: undefined;
};

const BottomTabs = createMaterialBottomTabNavigator<HomeTabsParamList>();

const HomeTabs = () => {
  return (
    <BottomTabs.Navigator initialRouteName="NowForecast" shifting={true}>
      <BottomTabs.Screen
        name="NowForecast"
        component={NowForecast}
        options={{
          tabBarLabel: 'Now',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={`settings${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'tomato',
        }}
      />
      <BottomTabs.Screen
        name="HourlyForecast"
        component={HourlyForecast}
        options={{
          tabBarLabel: 'Hourly',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={`palette${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'purple',
        }}
      />
      <BottomTabs.Screen
        name="TenDayForecast"
        component={TenDayForecast}
        options={{
          tabBarLabel: '10-Day',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={`palette${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'green',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeTabs;
