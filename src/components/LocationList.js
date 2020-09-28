import React, {useState, useEffect} from 'react';
import {Text} from '@ui-kitten/components';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {LocationCard} from './LocationCard';

export const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const reduxLocations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  const getLocations = async () => {
    try {
      setRefreshing(true);
      await setLocations(reduxLocations);
      setRefreshing(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteLocation = async (index) => {
    const filtered = locations.filter((item, idx) => idx != index);
    await setLocations(filtered);
    await dispatch({
      type: 'REMOVE_LOCATION',
      payload: filtered,
    });
  };

  const renderItem = (item, index) => (
    <LocationCard
      name={item.name}
      description={item.description}
      latitude={item.latitude}
      longitude={item.longitude}
      index={index}
      deleteLocation={deleteLocation}
    />
  );

  useEffect(() => {
    getLocations();
  }, []);

  return locations.length ? (
    <FlatList
      data={locations}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={(item) => item.name}
      style={{flex: 1, width: '100%'}}
      onRefresh={() => getLocations()}
      refreshing={refreshing}
    />
  ) : (
    <FlatList
      data={[1]}
      renderItem={() => (
        <>
          <Text category="h4" style={styles.noLocation}>
            No locations found
          </Text>
          <Text category="h6" style={{textAlign: 'center'}}>
            Pull to refresh
          </Text>
        </>
      )}
      keyExtractor={() => 'key'}
      style={{
        flex: 1,
        width: '100%',
      }}
      onRefresh={() => getLocations()}
      refreshing={refreshing}
    />
  );
};

const styles = StyleSheet.create({
  noLocation: {
    textAlign: 'center',
    marginTop: 30,
  },
});
