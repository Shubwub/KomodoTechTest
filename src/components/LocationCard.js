import React from 'react';
import {Layout, Text, Button, Icon, Card} from '@ui-kitten/components';
import {LocationText} from './LocationText';
import {Linking} from 'react-native';

const TrashIcon = () => (
  <Icon style={{width: 20, height: 20}} fill="#8F9BB3" name="trash" />
);

export const LocationCard = ({
  name,
  description,
  latitude,
  longitude,
  index,
  deleteLocation,
}) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const url = Platform.select({
    ios: `${scheme}${name}@${latitude},${longitude}`,
    android: `${scheme}${latitude},${longitude}(${name})`,
  });

  return (
    <Card onPress={() => Linking.openURL(url)} style={{display: 'flex'}}>
      <Layout
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text category="h4">{name}</Text>
        <Button
          appearance="ghost"
          status="danger"
          accessoryLeft={TrashIcon}
          onPress={() => deleteLocation(index)}
        />
      </Layout>
      <Text style={{marginBottom: 20}}>{description}</Text>
      <LocationText location={{latitude, longitude}} />
    </Card>
  );
};
