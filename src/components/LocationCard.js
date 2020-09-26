import React, {useState, useEffect} from 'react';
import {Layout, Text, Input, Divider, Card} from '@ui-kitten/components';
import {LocationText} from './LocationText';

export const LocationCard = ({name, description, latitude, longitude}) => {
  return (
    <Card>
      <Text category="h4">{name}</Text>
      <Text style={{marginBottom: 20}}>{description}</Text>
      <LocationText location={{latitude, longitude}} />
    </Card>
  );
};
