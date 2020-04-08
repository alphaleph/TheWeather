import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {TermsStackParamList} from 'src/navigators/TermsStack';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type TermsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<TermsStackParamList, 'Terms'>,
  CompositeNavigationProp<
    DrawerNavigationProp<MainDrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;
type Props = {
  navigation: TermsScreenNavigationProp;
};

const Terms = () => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Terms!`}</Text>
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

export default Terms;
