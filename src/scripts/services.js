/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

/**
 * This file contains a number of utility methods used to obtain data
 * from the server using the Oracle Content SDK JavaScript Library.
 */

import { queryItems, getRenditionURL } from './content-rn';

/*
 * Utility method to log an error.
 */
function logError(message, error) {
  if (error && error.statusMessage) {
    console.log(`${message} : `, error.statusMessage);
  } else if (error.error && error.error.code && error.error.code === 'ETIMEDOUT') {
    console.log(`${message} : `, error);
  } else if (error.error && error.error.code) {
    console.log(`${message} : `, error.error.code);
  } else if (error) {
    console.error(message, error);
  }
}

/**
 * Fetch the URLs for the specified named images.
 *
 * @returns {Promise({object})} - A Promise containing the data to display on the top level page
 * @param imageNames - Array of item names to get from the server
 * @returns map of image file name and its guid
 */
export default function fetchImageURLs(imageNames) {
  // Build up the query predicate of the format :
  // 'name eq "name1" OR name eq "name2" OR name eq "name3"'
  let predicate = '';
  for (let i = 0; i < imageNames.length; i += 1) {
    if (i > 0) {
      predicate += ' OR ';
    }
    predicate += `name eq "${imageNames[i]}"`;
  }
  const queryString = `(${predicate})`;

  // Search for the items and get the Rendition URL for each item
  return queryItems({
    q: queryString,
  }).then((result) => {
    const imageURLs = {};

    const guids = result.items;
    for (let i = 0; i < guids.length; i += 1) {
      const url = getRenditionURL({
        id: guids[i].id,
      });

      imageURLs[guids[i].name] = url;
    }

    return imageURLs;
  }).catch((error) => logError('Fetching images failed', error));
}
