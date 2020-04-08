import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Privacy from '../screens/Privacy';
import DrawerButton from '../components/DrawerButton';

export type PrivacyStackParamList = {
  Privacy: undefined;
};

const Stack = createStackNavigator<PrivacyStackParamList>();

const PrivacyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5FDD9D',
        },
        headerTintColor: '#1E2322',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => {
          return <DrawerButton />;
        },
      }}>
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{title: 'Privacy'}}
      />
    </Stack.Navigator>
  );
};

export default PrivacyStack;
