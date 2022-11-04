/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ROUTE } from '../types/index';

import ImageWithText from '../components/ImageWithText';
import Welcome from '../components/Welcome';
import { AppColors } from '../styles/common';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    flexGrow: 1,
  },
  root: {
    flex: 1,
  },
});

/**
 * The Home screen.
 */
function Home(props) {
  const { route } = props;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageWithText
          backgroundImage={route.params.imageUrl}
          mainTitle="Want to use OCE with your Headless implementation?"
          subText="Try out OCE Samples, these are tutorials that explain how simple it is to use OCE with your Headless Experience."
        />
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
}

/*
 * Define the type of data used in this component.
 */
Home.propTypes = {
  route: ROUTE.isRequired,
};

export default Home;
