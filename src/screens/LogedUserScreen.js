import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

import {FETCH_DEVS_AROUND, OBTAIN_USER_LOCATION} from '../actions/types';
import ButtonComponent from '../components/Button';

const LogedUserScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);

  const getDevelopersAround = async () => {
    await fetch(
      `https://api.github.com/search/users?q=location:${userData.location}`,
    ).then(r => {
      storeDevsAround(JSON.parse(r._bodyText));
      navigation.navigate('userAroundScreen');
    });
  };

  const getUserCity = async (latitude, longitude) => {
    const key = ''
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`,
    ).then(res => console.log('cidade? ', res.json()._bodyInit));
  };

  const mapsScreenNavigate = () => navigation.navigate('mapsScreen');

  const storeDevsAround = developersAround =>
    dispatch({type: FETCH_DEVS_AROUND, developersAround: developersAround});

  const obtainUserLocation = userLocation =>
    dispatch({type: OBTAIN_USER_LOCATION, userLocation: userLocation});

  const image = {
    uri: userData.avatar_url,
    width: 200,
    height: 200,
    borderRadius: 100,
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
        console.log('You can get my location');
        Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            obtainUserLocation({
              latitude: latitude,
              longitude: longitude,
            });
            mapsScreenNavigate();
            console.log(position);
            getUserCity(latitude, longitude);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <View>
        <Image source={image} />
      </View>
      <Text>{userData.name}</Text>
      <Text>{userData.location}</Text>
      <Text>{userData.bio}</Text>

      <View>
        <ButtonComponent
          title="Developers Around Me"
          func={() => getDevelopersAround()}
        />
      </View>

      <View>
        {/* <ButtonComponent
          title="Get My Location"
          func={() => mapsScreenNavigate()}
        /> */}
        <Text>Try permissions</Text>
        <Button
          title="request permissions"
          onPress={requestGeoLocationPermission}
        />
      </View>
    </View>
  );
};

export default LogedUserScreen;
