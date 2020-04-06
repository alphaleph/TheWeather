import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyLocations from '../screens/MyLocations';
import AddLocation from '../screens/AddLocation';
import EditLocation from '../screens/EditLocation';

export type LocationsStackParamList = {
  MyLocations: undefined;
  AddLocation: undefined;
  EditLocation: {
    locationId: number;
  };
};

const Stack = createStackNavigator<LocationsStackParamList>();

const LocationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyLocations"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5FDD9D',
        },
        headerTintColor: '#1E2322',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MyLocations"
        component={MyLocations}
        options={{title: 'My Locations'}}
      />
      <Stack.Screen
        name="AddLocation"
        component={AddLocation}
        options={{title: 'Add Location'}}
      />
      <Stack.Screen
        name="EditLocation"
        component={EditLocation}
        options={{title: 'Edit Location'}}
        // initialParams={{locationId: currentLocation.id}}
      />
    </Stack.Navigator>
  );
};

export default LocationsStack;
