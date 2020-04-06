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

type AddLocationScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<LocationsStackParamList, 'AddLocation'>,
  CompositeNavigationProp<
    StackNavigationProp<MainStackParamList>,
    CompositeNavigationProp<
      DrawerNavigationProp<MainDrawerParamList>,
      StackNavigationProp<RootStackParamList>
    >
  >
>;
type Props = {
  navigation: AddLocationScreenNavigationProp;
};

const AddLocation = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Add Location!`}</Text>
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

export default AddLocation;
