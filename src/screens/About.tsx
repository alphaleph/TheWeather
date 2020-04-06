import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type AboutScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<MainDrawerParamList, 'About'>,
  StackNavigationProp<RootStackParamList>
>;
type Props = {
  navigation: AboutScreenNavigationProp;
};

const About = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to About!`}</Text>
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

export default About;
