import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux';

const mapsScreen = () => {
  const [location, setLocation] = useState({});
  const currentLocation = useSelector(state => state.userLocation);

  const isEmpty = obj => Object.keys(obj).length !== 0;

  useEffect(() => {
    setLocation(currentLocation);
    console.log(location, currentLocation);
  });
  return (
    <View style={styles.container}>
      <Text>Tela de mapa</Text>
      {isEmpty(currentLocation) ? (
        <MapView
          //provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default mapsScreen;
