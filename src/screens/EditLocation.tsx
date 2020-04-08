import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {LocationsStackParamList} from '../navigators/LocationsStack';
import {MainStackParamList} from 'src/navigators/MainStack';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type EditLocationScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<LocationsStackParamList, 'EditLocation'>,
  CompositeNavigationProp<
    StackNavigationProp<MainStackParamList>,
    CompositeNavigationProp<
      DrawerNavigationProp<MainDrawerParamList>,
      StackNavigationProp<RootStackParamList>
    >
  >
>;
type EditLocationScreenRouteProp = RouteProp<
  LocationsStackParamList,
  'EditLocation'
>;
type Props = {
  navigation: EditLocationScreenNavigationProp;
  route: EditLocationScreenRouteProp;
};

const EditLocation = ({route}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Edit Location (${route.params.locationId})!`}</Text>
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

export default EditLocation;
