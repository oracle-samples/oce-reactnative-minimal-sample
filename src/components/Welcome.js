/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { Text, View } from 'react-native';

import { CommonStyles } from '../styles/common';

/**
 * Welcome component.
 */
function Welcome() {
  return (
    <View style={CommonStyles.Content}>
      <Text style={CommonStyles.Title}>Welcome to OCE Minimal</Text>

      <Text style={CommonStyles.TextWithTopMargin}>
        This sample is designed for you to understand how easily you can
        retrieve Images from an OCE asset repository.
      </Text>
      <Text style={CommonStyles.TextWithTopMargin}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim
      </Text>
      <Text style={CommonStyles.TextWithTopMargin}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet.
      </Text>
      <Text style={CommonStyles.TextWithTopMargin}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer.
      </Text>
      <Text style={CommonStyles.TextWithTopMargin}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer porta lacinia enim, vel tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        lacinia enim, vel tincidunt. Lorem ipsum dolor sit amet.
      </Text>
    </View>
  );
}

export default Welcome;
