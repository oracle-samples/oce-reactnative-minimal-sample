/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

const TextSizes = {
  TEXT_SIZE_LARGE: 18,
  TEXT_SIZE_MEDIUM: 14,
  TEXT_SIZE_SMALL: 12,
};

const GRADIENT_END = '#8d9b0c';
const GRADIENT_MIDDLE = '#3e411e';
const GRADIENT_START = '#282723';

const AppColors = {
  BLACK: 'black',
  BUTTON_BACKGROUND: '#c0d600',
  BUTTON_TEXT: '#58595B',
  DARK_TEXT_COLOR: '#403C38',
  GRADIENT_COLORS: [GRADIENT_START, GRADIENT_MIDDLE, GRADIENT_END],
  GREY: '#696969',
  HEADER_COLOR: '#282723',
  LIGHT_BACKGROUND: 'white',
  LIGHT_TEXT_COLOR: 'white',
  LINK_TEXT_COLOR: 'blue',
  NAV_ACTIVE_ITEM_COLOR: '#C0D600',
  NAV_INACTIVE_ITEM_COLOR: '#797979',
  TOUCHABLE_HIGHLIGHT_COLOR: '#ffffff00',
  WHITE: 'white',
};

const CommonStyles = {
  Content: {
    backgroundColor: AppColors.LIGHT_BACKGROUND,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },

  LightText: {
    color: AppColors.LIGHT_TEXT_COLOR,
  },

  Text: {
    fontSize: TextSizes.TEXT_SIZE_MEDIUM,
  },

  TextWithTopMargin: {
    color: AppColors.DARK_TEXT_COLOR,
    fontSize: TextSizes.TEXT_SIZE_MEDIUM,
    marginTop: 8,
  },

  Title: {
    color: AppColors.DARK_TEXT_COLOR,
    fontSize: TextSizes.TEXT_SIZE_LARGE,
    marginBottom: 16,
    marginTop: 16,
  },

};

export { AppColors, TextSizes, CommonStyles };
