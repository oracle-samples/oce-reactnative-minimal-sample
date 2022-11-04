/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { AppColors, CommonStyles } from '../styles/common';

const styles = StyleSheet.create({
  locations: {
    backgroundColor: AppColors.GREY,
    flex: 1,
  },
});

/**
 * Locations component.
 */
function Locations() {
  return (
    <View id="locations-container" style={[CommonStyles.Content, styles.locations]}>
      <Text style={[CommonStyles.Title, CommonStyles.LightText]}>Locations:</Text>

      <Text style={[CommonStyles.TextWithTopMargin, CommonStyles.LightText]}>
        Regional Office1
      </Text>
      <Text style={[CommonStyles.Text, CommonStyles.LightText]}>
        #123, Building Number 142,
      </Text>
      <Text style={[CommonStyles.Text, CommonStyles.LightText]}>
        City1, Province1, Country1 - 12032
      </Text>

      <Text style={[CommonStyles.TextWithTopMargin, CommonStyles.LightText]}>
        Regional Office2 :
      </Text>
      <Text style={[CommonStyles.Text, CommonStyles.LightText]}>
        #45, Building Number 12,
      </Text>
      <Text style={[CommonStyles.Text, CommonStyles.LightText]}>
        City2 , Province2 , Country2 - 560032
      </Text>
    </View>
  );
}

export default Locations;
