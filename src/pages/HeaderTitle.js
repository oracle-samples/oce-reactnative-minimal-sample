/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { getImageSource } from '../scripts/content-rn';

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 96,
  },
});

/**
 * Component which renders the company logo in the header for each screen.
 *
 * @param logo the url of the company logo image
 */
function HeaderTitle(props) {
  const { logo } = props;
  if (logo) {
    return (
      <Image
        style={styles.image}
        source={getImageSource(logo)}
      />
    );
  }
}

HeaderTitle.propTypes = {
  logo: PropTypes.string.isRequired,
};

HeaderTitle.defaultProps = {
};

export default HeaderTitle;
