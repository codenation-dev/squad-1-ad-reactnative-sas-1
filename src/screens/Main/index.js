/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

import ButtonComponent from '../../components/Button';
import {
  getProfileRequest,
  getUserLocationSuccess,
} from '../../store/modules/user/actions';

const Main = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (!user.userProfile && !user.userLocation) {
      dispatch(getProfileRequest());
      requestGeoLocationPermission();
    }
  }, []);

  const setUserLocation = location => {
    dispatch(getUserLocationSuccess(location));
  };

  const requestGeoLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Get current location of user',
          message: 'To use this app you need to provid yout current location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            setUserLocation({latitude, longitude});
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handlleUserProfile = user => {
    navigation.navigate('userInfo', user);
  };

  return user.userProfile && user.userLocation ? (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handlleUserProfile(user)}>
          <Image
            source={{uri: user.userProfile.avatar_url}}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: user.userLocation.latitude,
          longitude: user.userLocation.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }}
      />
      <View style={styles.footer}>
        <ButtonComponent
          title="Find devs around"
          onPress={() => navigation.navigate('DevelopersAround')}
        />
      </View>
    </>
  ) : (
    <Text>Loading</Text>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(197, 226, 238, 0.4)',
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 20,
    zIndex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
