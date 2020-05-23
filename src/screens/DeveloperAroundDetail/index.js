import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';

import Spinner from '../../components/Spinner';

const DeveloperAroundDetail = ({route}) => {
  const getDev = userName => {
    setDeveloper({});
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(response => {
        let arrDevs = response.data.items;
        setDeveloper(arrDevs);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const [developer, setDeveloper] = useState({});
  useEffect(() => {
    getDev(route.params.login);
  }, [route.params.login]);
  return (
    <View style={styles.container}>
      {developer ? (
        <View>
          <View style={styles.developer}>
            <Image source={{uri: developer.avatar_url}} style={styles.avatar} />
            <Text style={styles.name}>{developer.login}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(developer.html_url)}>
              <Text style={styles.link}>{developer.html_url}</Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Seguidores: <Text>{developer.followers}</Text>
              </Text>
              <Text style={styles.infoText}>
                Seguindo: <Text>{developer.following}</Text>
              </Text>
              <Text style={styles.infoText}>
                Repositórios: <Text>{developer.public_repos}</Text>
              </Text>
            </View>
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
