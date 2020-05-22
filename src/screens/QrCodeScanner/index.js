import React, {useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QrCodeScanner = ({navigation}) => {
  const [dev, setDev] = useState({});
  const onSuccess = e => {
    axios
      .get(`https://api.github.com/search/users?q=user:${e.data}`)
      .then(response => {
        let developer = response.data.items[0];
        setDev(developer);
        console.log(developer);
      })
      .catch(function(error) {
        console.log(error);
      });

    navigation.navigate('DeveloperAroundDetail', dev);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={<Text style={styles.centerText}>Enquadre o QR code.</Text>}
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrCodeScanner;
