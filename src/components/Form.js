import React, {useState, useEffect} from 'react';
import {Layout, Text, Input} from '@ui-kitten/components';
import {LocationText} from './LocationText';
import Geolocation from '@react-native-community/geolocation';

export const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({});

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
      />
      <LocationText location={location} />
    </Layout>
  );
};
