import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {AboutStackParamList} from 'src/navigators/AboutStack';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type AboutScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AboutStackParamList, 'About'>,
  CompositeNavigationProp<
    DrawerNavigationProp<MainDrawerParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;
type Props = {
  navigation: AboutScreenNavigationProp;
};

const About = () => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to About!`}</Text>
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

export default About;
