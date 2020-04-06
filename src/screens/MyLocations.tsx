import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LocationsStackParamList} from '../navigators/LocationsStack';
import {MainStackParamList} from 'src/navigators/MainStack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type MyLocationsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<LocationsStackParamList, 'MyLocations'>,
  CompositeNavigationProp<
    StackNavigationProp<MainStackParamList>,
    CompositeNavigationProp<
      DrawerNavigationProp<MainDrawerParamList>,
      StackNavigationProp<RootStackParamList>
    >
  >
>;
type Props = {
  navigation: MyLocationsScreenNavigationProp;
};

const MyLocations = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to My Locations!`}</Text>
      <Button
        onPress={() => navigation.navigate('SettingsTabs')}
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

export default MyLocations;
