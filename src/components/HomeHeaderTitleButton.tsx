import React from 'react';
// import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HomeHeaderTitleButton = () => {
  // Default location: New York City, OpenWeatherMap code
  const currentLocation = 'New York City';

  // const currentLocation = useSelector((state: LocationsState) => {
  //   return state.locations.myLocations.filter((loc => loc.id === state.locations.currentLocationId));
  // });

  const navigation = useNavigation();

  return (
    <RectButton
      onPress={() =>
        navigation.navigate('LocationsStack', {screen: 'MyLocations'})
      }>
      <View accessible>
        <Text>{currentLocation}</Text>
      </View>
    </RectButton>
  );
};

export default HomeHeaderTitleButton;
