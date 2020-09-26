import React, {useState, useEffect} from 'react';
import {Layout, Text, Input} from '@ui-kitten/components';
import {FlatList} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
import {LocationCard} from './LocationCard';

export const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    try {
      const locationsString = await AsyncStorage.getItem('locations');
      const locationsArray =
        locationsString != null ? JSON.parse(locationsString) : null;
      setLocations(locationsArray);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}) => (
    <LocationCard
      name={item.name}
      description={item.description}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  );

  useEffect(() => {
    getLocations();
  }, []);

  return locations.length ? (
    <FlatList
      data={locations}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      style={{flex: 1, width: '100%'}}
    />
  ) : (
    <Text>No locations found</Text>
  );
};
