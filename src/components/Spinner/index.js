import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Spinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#006099" />
    </View>
  );
};

export default Spinner;
