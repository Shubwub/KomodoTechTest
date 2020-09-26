import React from 'react';
import {Layout, Text, Icon} from '@ui-kitten/components';

export const LocationText = ({location}) => {
  console.log(location);
  return (
    <Layout
      style={{
        flex: 1,
      }}>
      <Icon
        style={{
          width: 32,
          height: 32,
        }}
        name="pin-outline"
      />
      <Text>latitude: {location.latitude}</Text>
      <Text>longitude: {location.longitude}</Text>
    </Layout>
  );
};
