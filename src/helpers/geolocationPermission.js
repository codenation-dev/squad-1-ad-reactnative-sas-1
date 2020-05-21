import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

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

export default requestGeoLocationPermission;
