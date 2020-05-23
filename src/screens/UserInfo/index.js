import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch} from 'react-redux';

import styles from './styles';
import {signOut} from '../../store/modules/auth/actions';
import Spinner from '../../components/Spinner';

const DeveloperAroundDetail = ({route, navigation}) => {
  const [developer, setDeveloper] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setDeveloper(route.params.userProfile);
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
            <QRCode value={developer.login} size={250} />
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={() => dispatch(signOut())}>
              <Text style={styles.actionText}>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('QrCodeScanner')}>
              <Text style={styles.actionText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export default DeveloperAroundDetail;
