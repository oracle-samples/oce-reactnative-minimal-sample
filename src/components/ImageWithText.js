/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { getImageSource } from '../scripts/content-rn';
import { AppColors, TextSizes } from '../styles/common';

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.BUTTON_BACKGROUND,
    borderRadius: 5,
    color: AppColors.BUTTON_TEXT,
    fontSize: TextSizes.TEXT_SIZE_SMALL,
    marginBottom: 16,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '2%',
  },

  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  text: {
    color: AppColors.WHITE,
    fontSize: TextSizes.TEXT_SIZE_MEDIUM,
    marginTop: '4%',
  },

  textContainer: {
    paddingBottom: '6%',
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '6%',
    width: '57%',
  },

  title: {
    color: AppColors.WHITE,
    fontSize: TextSizes.TEXT_SIZE_LARGE,
  },
});

/**
 * Component for an Image with overlaid text and optionally a button.
 */
function ImageWithText(props) {
  const {
    backgroundImage, mainTitle, subText, buttonText, buttonUrl,
  } = props;

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={getImageSource(backgroundImage)}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{mainTitle}</Text>
        <Text style={styles.text}>{subText}</Text>

        {buttonText && buttonUrl && (
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => Linking.openURL(buttonUrl)}
            style={styles.button}
            underlayColor="#ffffff"
          >
            <Text>{buttonText}</Text>
          </TouchableHighlight>
        </View>
        )}
      </View>
    </ImageBackground>
  );
}

/*
 * Define the type of data used in this component.
 */
ImageWithText.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

ImageWithText.defaultProps = {
  buttonUrl: null,
  buttonText: null,
};

export default ImageWithText;
