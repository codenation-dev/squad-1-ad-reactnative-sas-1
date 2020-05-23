import React, {useState} from 'react';
import axios from 'axios';
import {Text} from 'react-native';
import styles from './styles';

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

export default QrCodeScanner;
