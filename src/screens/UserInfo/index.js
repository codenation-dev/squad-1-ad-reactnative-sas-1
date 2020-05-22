import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch} from 'react-redux';

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

const styles = StyleSheet.create({
  container: {},
  developer: {
    paddingTop: 70,
    display: 'flex',
    paddingRight: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 250,
    backgroundColor: '#006099',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  link: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 36,
  },
  codeContainer: {
    paddingTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  actionContainer: {
    marginTop: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionText: {
    color: '#006099',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

export default DeveloperAroundDetail;
