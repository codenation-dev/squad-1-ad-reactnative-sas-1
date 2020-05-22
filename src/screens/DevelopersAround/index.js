import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';

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
        `https://api.github.com/search/users?q=location:${cidade}&page=${currentPage}&per_page=10`,
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
      {devs.length === 10 ? (
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

const styles = StyleSheet.create({
  devsCountContainer: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
  },
  counter: {
    color: 'red',
  },
  avatarContainer: {
    marginTop: 0,
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  avatarName: {
    marginLeft: 25,
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  page: {
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

export default DevelopersAroud;
