import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Terms from '../screens/Terms';
import DrawerButton from '../components/DrawerButton';

export type TermsStackParamList = {
  Terms: undefined;
};

const Stack = createStackNavigator<TermsStackParamList>();

const TermsStack = () => {
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
      <Stack.Screen name="Terms" component={Terms} options={{title: 'Terms'}} />
    </Stack.Navigator>
  );
};

export default TermsStack;
