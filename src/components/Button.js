import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ title, func }) => {
  const content = (
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <TouchableOpacity
      onPress={func}
    >
      {content}
    </TouchableOpacity>
 )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    color: '#fff',
    fontSize: 24,

  }
})

export default ButtonComponent;
