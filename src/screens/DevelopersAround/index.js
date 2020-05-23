import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import styles from './styles';

import Spinner from '../../components/Spinner';

const DevelopersAroud = ({navigation}) => {
  const [city, setCity] = useState('');
  const {latitude, longitude} = useSelector(state => state.user.userLocation);
  const [devs, setDevs] = useState([]);
  const [page, setPage] = useState(1);

  const getUserCity = async (lat, long) => {
    const key = 'AIzaSyB_P5-lmD49l0dkyvmTpnym69vO7X2MqOA';
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`,
    )
      .then(res => res.json())
      .then(data => {
        setCity(data.results[5].address_components[0].long_name);
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  const getDevelopersAround = (cidade, currentPage) => {
    setDevs([]);
    axios
      .get(
        `https://api.github.com/search/users?q=location:${cidade}&page=${currentPage}&per_page=9`,
      )
      .then(response => {
        let arrDevs = response.data.items;
        setDevs(arrDevs);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleSelectedDev = developer => {
    console.log('click', developer);
    navigation.navigate('DeveloperAroundDetail', developer);
  };

  useEffect(() => {
    getUserCity(latitude, longitude);
    getDevelopersAround(city, page);
  }, [city, latitude, longitude, page]);

  return devs.length > 0 ? (
    <ScrollView>
      <View style={styles.devsCountContainer}>
        <Text>We Found </Text>
        <Text style={styles.counter}>{devs.length} devs</Text>
        <Text> nearby!</Text>
      </View>

      {devs.length > 0 ? (
        devs.map(dev => {
          return (
            <View key={dev.id}>
              <TouchableOpacity
                style={styles.avatarContainer}
                onPress={() => handleSelectedDev(dev)}>
                <Image source={{uri: dev.avatar_url}} style={styles.avatar} />
                <Text style={styles.avatarName}>{dev.login}</Text>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <Spinner />
      )}
      {devs.length === 9 ? (
        <View style={styles.page}>
          <TouchableOpacity onPress={() => setPage(page + 1)}>
            <Text style={styles.actionText}>Proxima</Text>
          </TouchableOpacity>
          {page !== 1 && (
            <TouchableOpacity onPress={() => setPage(page - 1)}>
              <Text style={styles.actionText}>Anterior</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.page}>
          <TouchableOpacity onPress={() => setPage(page - 1)}>
            <Text style={styles.actionText}>Anterior</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  ) : (
    <Spinner />
  );
};

export default DevelopersAroud;
