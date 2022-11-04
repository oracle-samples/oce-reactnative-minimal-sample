/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import ContactUsNavigator from './pages/ContactUsNavigator';
import DrawerContents from './DrawerContents';
import HomeNavigator from './pages/HomeNavigator';
import SplashScreen from './pages/SplashScreen';

import appConfig from './config/data';
import fetchImageURLs from './scripts/services';
import { AppColors } from './styles/common';

const Drawer = createDrawerNavigator();

/**
* Main application entry.
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;

    this.state = {
      navDrawerLogoUrl: '',
      homePageImageUrl: '',
      contactUsImageUrl: '',
      dataLoading: true,
    };
  }

  /**
  * Load the images used in this application
  */
  componentDidMount() {
    this.mounted = true;

    // get the URLs for all the images used in the app
    fetchImageURLs([
      appConfig.logo,
      appConfig.footerLogo,
      appConfig.homePage,
      appConfig.contactUs,
    ])
      .then((urls) => {
        if (this.mounted) {
          this.setState({
            companyLogoUrl: urls[appConfig.logo],
            navDrawerLogoUrl: urls[appConfig.footerLogo],
            homePageImageUrl: urls[appConfig.homePage],
            contactUsImageUrl: urls[appConfig.contactUs],
            dataLoading: false,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {
      dataLoading,
      navDrawerLogoUrl,
      homePageImageUrl,
      companyLogoUrl,
      contactUsImageUrl,
    } = this.state;

    if (dataLoading) {
      return <SplashScreen />;
    }

    const drawerContents = (props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <DrawerContents {...props} logo={navDrawerLogoUrl} />
    );

    return (
      <>
        <StatusBar backgroundColor={AppColors.HEADER_COLOR} />

        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={drawerContents}
            initialRouteName="Home"
            screenOptions={{
              drawerActiveTintColor: '#C0D600',
              drawerInactiveTintColor: '#797979',
              drawerLabelStyle: { textTransform: 'uppercase' },
            }}
          >
            <Drawer.Screen
              name="Home"
              component={HomeNavigator}
              initialParams={{
                imageUrl: homePageImageUrl,
                companyLogoUrl,
              }}
            />

            <Drawer.Screen
              name="Contact Us"
              component={ContactUsNavigator}
              initialParams={{
                imageUrl: contactUsImageUrl,
                companyLogoUrl,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
