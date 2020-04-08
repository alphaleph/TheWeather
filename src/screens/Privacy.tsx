import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {PrivacyStackParamList} from 'src/navigators/PrivacyStack';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type PrivacyScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PrivacyStackParamList, 'Privacy'>,
  CompositeNavigationProp<
    DrawerNavigationProp<MainDrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;
type Props = {
  navigation: PrivacyScreenNavigationProp;
};

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Privacy!`}</Text>
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

export default Privacy;
