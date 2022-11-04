/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import {
  Linking, StyleSheet, Text, View,
} from 'react-native';

import { AppColors, CommonStyles } from '../styles/common';

const styles = StyleSheet.create({
  linkText: {
    color: AppColors.LINK_TEXT_COLOR,
  },
});

/**
 * Connect With Us component.
 */
function ConnectWithUs() {
  return (
    <View style={CommonStyles.Content}>
      <Text style={CommonStyles.Title}>Connect with us:</Text>

      <View>
        <Text style={CommonStyles.TextWithTopMargin}>
          You can post your questions to our&nbsp;
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL(
              'https://cloudcustomerconnect.oracle.com/resources/f987e90cba/summary',
            )}
          >
            Oracle Cloud Connect forum
          </Text>
        </Text>
        <Text style={CommonStyles.TextWithTopMargin}>
          Check out all our samples&nbsp;
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL(
              'https://www.oracle.com/middleware/technologies/content-experience-downloads.html',
            )}
          >
            here.
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default ConnectWithUs;
