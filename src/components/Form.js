import React, {useEffect} from 'react';
import {Layout, Text, Input} from '@ui-kitten/components';
import {LocationText} from './LocationText';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

export const Form = ({
  name,
  setName,
  description,
  setDescription,
  location,
  setLocation,
}) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(({coords: {latitude, longitude}}) =>
      setLocation({latitude, longitude}),
    );
  }, []);

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%',
        marginTop: 50,
      }}>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{marginBottom: 10}}
      />
      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{marginBottom: 20}}
      />
      <LocationText location={location} />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Layout>
  );
};
