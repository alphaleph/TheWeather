import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MainDrawerParamList} from '../navigators/MainDrawer';
import {DrawerNavigationProp, useIsDrawerOpen} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

const DrawerButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainDrawerParamList>>();
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <BorderlessButton onPress={() => navigation.toggleDrawer()}>
      <View
        accessible
        accessibilityLabel={
          isDrawerOpen ? 'Close Drawer Menu' : 'Open Drawer Menu'
        }>
        {isDrawerOpen ? (
          <Icon name={'backburger'} size={26} />
        ) : (
          <Icon name={'menu'} size={26} />
        )}
      </View>
    </BorderlessButton>
  );
};

export default DrawerButton;
