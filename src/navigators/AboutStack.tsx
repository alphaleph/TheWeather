import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import DrawerButton from '../components/DrawerButton';

export type AboutStackParamList = {
  About: undefined;
};

const Stack = createStackNavigator<AboutStackParamList>();

const AboutStack = () => {
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
      <Stack.Screen name="About" component={About} options={{title: 'About'}} />
    </Stack.Navigator>
  );
};

export default AboutStack;
