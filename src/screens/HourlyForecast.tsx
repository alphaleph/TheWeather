import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../navigators/MainStack';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {HomeTabsParamList} from 'src/navigators/HomeTabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type HourlyForecastScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<HomeTabsParamList, 'HourlyForecast'>,
  CompositeNavigationProp<
    StackNavigationProp<MainStackParamList>,
    CompositeNavigationProp<
      DrawerNavigationProp<MainDrawerParamList>,
      StackNavigationProp<RootStackParamList>
    >
  >
>;
type Props = {
  navigation: HourlyForecastScreenNavigationProp;
};

const HourlyForecast = () => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to HourlyForecast!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HourlyForecast;
