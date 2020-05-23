import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';

import Spinner from '../../components/Spinner';

const DeveloperAroundDetail = ({route}) => {
  const [developer, setDeveloper] = useState({});
  useEffect(() => {
    setDeveloper(route.params);
  }, [route.params]);
  return (
    <View style={styles.container}>
      {developer ? (
        <View>
          <View style={styles.developer}>
            <Image source={{uri: developer.avatar_url}} style={styles.avatar} />
            <Text style={styles.name}>{developer.login}</Text>
            <Text style={styles.link}>{developer.html_url}</Text>
          </View>
          <View style={styles.codeContainer}>
            <QRCode value={developer.login} size={300} />
          </View>
        </View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export default DeveloperAroundDetail;
