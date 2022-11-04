/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { AppColors } from '../styles/common';
import fetchImageURLs from '../scripts/services';
import appConfig from '../config/data';
import { getImageSource } from '../scripts/content-rn';

const styles = StyleSheet.create({
  drawer: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      native: {
        flex: 1,
      },
      default: {
        // other platforms, web for example
        height: Dimensions.get('window').height,
      },
    }),
  },

  logo: {
    height: 60,
    width: 191,
  },
});

/**
 * The Splash Screen
 */
export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;

    this.state = {
      splashLogoURL: '',
      gotData: false,
    };

    this.state = { gotData: true };
  }

  /**
   * Load the image to display in the splash screen which
   * will replace the spinner.
   */
  componentDidMount() {
    this.mounted = true;

    // get the URL for the splash screen
    fetchImageURLs([appConfig.logo])
      .then((urls) => {
        if (this.mounted) {
          this.setState({
            splashLogoURL: urls[appConfig.logo],
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

  /*
   * Render the component
   */
  render() {
    const { gotData, splashLogoURL } = this.state;
    const gotAllData = gotData && splashLogoURL;

    return (
      <LinearGradient
        colors={AppColors.GRADIENT_COLORS}
        style={styles.drawer}
      >
        {gotAllData ? (
          <Image
            style={styles.logo}
            source={getImageSource(splashLogoURL)}
          />
        ) : (
          <ActivityIndicator size="large" color={AppColors.NAV_INACTIVE_ITEM_COLOR} />
        )}
      </LinearGradient>
    );
  }
}
