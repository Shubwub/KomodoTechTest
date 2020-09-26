import React from 'react';
import {Text} from '@ui-kitten/components';

export const LocationText = ({location}) => {
  return (
    <>
      <Text>latitude: {location.latitude}</Text>
      <Text>longitude: {location.longitude}</Text>
    </>
  );
};
