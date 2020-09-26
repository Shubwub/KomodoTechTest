import React, {useState, useEffect} from 'react';
import {Layout, Text, Input, Divider, Card} from '@ui-kitten/components';
import {LocationText} from './LocationText';
import {Linking} from 'react-native';

export const LocationCard = ({name, description, latitude, longitude}) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const url = Platform.select({
    ios: `${scheme}${name}@${latitude},${longitude}`,
    android: `${scheme}${latitude},${longitude}(${name})`,
  });

  return (
    <Card onPress={() => Linking.openURL(url)}>
      <Text category="h4">{name}</Text>
      <Text style={{marginBottom: 20}}>{description}</Text>
      <LocationText location={{latitude, longitude}} />
    </Card>
  );
};
