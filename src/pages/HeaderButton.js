/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { NAVIGATION } from '../types/index';

import { AppColors } from '../styles/common';

const NAV_DRAWER_IMAGE = require('../assets/menu.png');

const styles = StyleSheet.create({
  image: {
    height: 30,
    tintColor: AppColors.WHITE,
    width: 30,
  },

  imageContainer: {
    marginLeft: 8,
  },
});

/**
 * Renders a button which when clicked opened the navigation drawer.
 */
function HeaderButton(props) {
  const { navigation } = props;
  return (
    <TouchableHighlight
      style={styles.imageContainer}
      onPress={() => navigation.toggleDrawer()}
      underlayColor={AppColors.TOUCHABLE_HIGHLIGHT_COLOR}
      displayName=""
    >
      <Image
        style={styles.image}
        source={NAV_DRAWER_IMAGE}
      />
    </TouchableHighlight>
  );
}

HeaderButton.propTypes = {
  navigation: NAVIGATION.isRequired,
};

export default HeaderButton;
