import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import MapView, {Marker} from 'react-native-maps';

export const MapComponent = ({name, description, location, setLocation}) => {
  const [marker, setMarker] = useState({
    name,
    description,
    latlng: {
      latitude: location.latitude,
      longitude: location.longitude,
    },
  });

  console.log(marker);
  return (
    <Layout
      style={{
        height: 320,
        width: '100%',
        marginTop: 20,
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={({nativeEvent: {coordinate}}) => {
          setLocation(coordinate);
          setMarker({
            name,
            description,
            latlng: {
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            },
          });
        }}
        showsUserLocation>
        <Marker
          coordinate={marker.latlng}
          title={marker.name}
          description={marker.description}
        />
      </MapView>
    </Layout>
  );
};
