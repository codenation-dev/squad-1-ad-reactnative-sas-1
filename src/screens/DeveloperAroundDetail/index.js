import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

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
        <Text>Loading</Text>
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
    height: 300,
    backgroundColor: '#006099',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  link: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 36,
  },
  codeContainer: {
    paddingTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
});

export default DeveloperAroundDetail;
