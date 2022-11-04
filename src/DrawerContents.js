/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { NAVIGATION } from './types/index';
import { AppColors } from './styles/common';
import { getImageSource } from './scripts/content-rn';

const BACK_IMAGE = require('./assets/back.png');

const styles = StyleSheet.create({
  back: {
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    tintColor: AppColors.WHITE,
    width: 30,
  },

  drawer: {
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
    alignSelf: 'center',
    height: 36,
    marginBottom: 20,
    tintColor: AppColors.BLACK,
    width: 243,
  },

});

/**
 * Layout for the Navigation Drawer
 *
 * @param logo the url of the logo image
 */
function DrawerContents(props) {
  const { navigation, logo } = props;
  return (
    <LinearGradient
      colors={AppColors.GRADIENT_COLORS}
      style={styles.drawer}
    >
      <TouchableHighlight
        onPress={() => navigation.closeDrawer()}
        underlayColor={AppColors.TOUCHABLE_HIGHLIGHT_COLOR}
      >
        <Image
          style={styles.back}
          source={BACK_IMAGE}
        />
      </TouchableHighlight>

      <DrawerContentScrollView style={styles.drawItemsContainer}>
        {/* The list of drawer items, Note: We do not want a background
            colour on the active item */}
        <DrawerItemList
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </DrawerContentScrollView>

      {/* The company logo displayed at the bottom of the drawer */}
      {logo && (
        <Image
          style={styles.logo}
          source={getImageSource(logo)}
        />
      )}
    </LinearGradient>
  );
}

DrawerContents.propTypes = {
  navigation: NAVIGATION.isRequired,
  logo: PropTypes.string.isRequired,
};

DrawerContents.defaultProps = {
};

export default DrawerContents;
