/**
 * Copyright (c) 2022, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ROUTE } from '../types/index';

import ConnectWithUs from '../components/ConnectWithUs';
import Locations from '../components/Locations';
import ImageWithText from '../components/ImageWithText';
import { AppColors } from '../styles/common';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GREY,
    flexGrow: 1,
  },
  root: {
    flex: 1,
  },
});

/**
 * The Contact Us screen.
 */
function ContactUs(props) {
  const { route } = props;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageWithText
          backgroundImage={route.params.imageUrl}
          mainTitle="Want to learn more?"
          subText="Find out more learning material on OCE Developer portal."
          buttonText="OCE FOR DEVELOPERS"
          buttonUrl="https://developer.oracle.com/"
        />
        <ConnectWithUs />
        <Locations />
      </ScrollView>
    </SafeAreaView>
  );
}

/*
 * Define the type of data used in this component.
 */
ContactUs.propTypes = {
  route: ROUTE.isRequired,
};

export default ContactUs;
