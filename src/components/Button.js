import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ButtonComponent = ({title, onPress, icon}) => {
  const content = (
    <View style={styles.button}>
      {icon ? (
        <FontAwesomeIcon icon={icon} style={styles.icon} size={18} />
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
