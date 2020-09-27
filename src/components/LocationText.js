import React from 'react';
import {Text, Icon, Layout} from '@ui-kitten/components';

export const LocationText = ({location}) => {
  console.log(location);
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <Icon style={{width: 20, height: 20}} fill="#8F9BB3" name="pin" />
      <Text>lat: {location.latitude.toFixed(3)}</Text>
      <Text>longitude: {location.longitude.toFixed(3)}</Text>
    </Layout>
  );
};
