import React, {useEffect} from 'react';
import {Layout, Toggle, Input} from '@ui-kitten/components';
import {LocationText} from './LocationText';
import Geolocation from '@react-native-community/geolocation';
import {MapComponent} from './MapComponent';

export const Form = ({
  name,
  setName,
  description,
  setDescription,
  location,
  setLocation,
  isSelected,
  setSelected,
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
      <Toggle
        checked={isSelected}
        onChange={() => setSelected(!isSelected)}
        style={{marginBottom: 20}}>
        Use current location?
      </Toggle>
      {location.latitude && location.longitude && (
        <>
          <LocationText location={location} />
          {!isSelected && (
            <MapComponent
              name={name}
              description={description}
              location={location}
              setLocation={setLocation}
            />
          )}
        </>
      )}
    </Layout>
  );
};
