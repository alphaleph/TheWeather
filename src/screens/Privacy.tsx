import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from 'src/navigators/MainDrawer';
import {RootStackParamList} from 'src/navigators/RootStack';
// import {SafeAreaView} from 'react-native-safe-area-context';

type PrivacyScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<MainDrawerParamList, 'Privacy'>,
  StackNavigationProp<RootStackParamList>
>;
type Props = {
  navigation: PrivacyScreenNavigationProp;
};

const Privacy = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to Privacy!`}</Text>
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

export default Privacy;
