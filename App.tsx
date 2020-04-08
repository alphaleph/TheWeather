import 'react-native-gesture-handler';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Store from './src/redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/navigators/RootStack';
// import Config from 'react-native-config';
// <Text>{Config.API_URL}</Text>

// declare var global: {HermesInternal: null | {}};

//TODO: Add react-native-splash-screen

const App = () => {
  return (
    <ReduxProvider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
