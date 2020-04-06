import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {SettingsTabsParamList} from 'src/navigators/SettingsTabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type AppearanceSettingsScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<SettingsTabsParamList, 'AppearanceSettings'>,
  CompositeNavigationProp<
    DrawerNavigationProp<MainDrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;
type Props = {
  navigation: AppearanceSettingsScreenNavigationProp;
};

const AppearanceSettings = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Appearance Settings!`}</Text>
      <Button
        onPress={() => navigation.navigate('GeneralSettings')}
        title="Go to General Settings"
      />
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

export default AppearanceSettings;
