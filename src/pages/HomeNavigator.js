/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION, ROUTE } from '../types/index';

import HeaderButton from './HeaderButton';
import HeaderTitle from './HeaderTitle';
import Home from './Home';
import { AppColors } from '../styles/common';

const Stack = createStackNavigator();

/**
 * Navigator for the Home screens.
 *
 * @param imageUrl the image for the Home page
 * @param companyLogoUrl the logo for the header
 */
function HomeNavigator(props) {
  const { route, navigation } = props;
  const headerLogo = route.params.companyLogoUrl;

  const renderHeaderTitle = () => (
    <HeaderTitle logo={headerLogo} />
  );

  const renderHeaderLeft = () => (
    <HeaderButton navigation={navigation} />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppColors.HEADER_COLOR,
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="OCE Minimal"
        component={Home}
        initialParams={{
          imageUrl: route.params.imageUrl,
        }}
        options={{
          headerTitle: { renderHeaderTitle },
          headerLeft: { renderHeaderLeft },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

/*
 * Define the type of data used in this component.
 */
HomeNavigator.propTypes = {
  navigation: NAVIGATION.isRequired,
  route: ROUTE.isRequired,
};

export default HomeNavigator;
