import React, {useState} from 'react';
import {ToastAndroid, SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {Form} from '../components/Form';

import AsyncStorage from '@react-native-community/async-storage';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const SaveIcon = (props) => <Icon {...props} name="checkmark" />;

export const DetailsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({});

  const navigateBack = () => {
    navigation.goBack();
  };

  const saveLocation = async () => {
    try {
      const locationsString = await AsyncStorage.getItem('locations');
      const locations =
        locationsString !== null ? JSON.parse(locationsString) : [];
      locations.push({
        name,
        description,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      await AsyncStorage.setItem('locations', JSON.stringify(locations));
      ToastAndroid.show('Location successfully added!', ToastAndroid.SHORT);
    } catch (e) {
      console.log(e);
    }
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const SaveAction = () => (
    <TopNavigationAction icon={SaveIcon} onPress={saveLocation} />
  );

  const isFormComplete = () => {
    return name && description && location.latitude && location.longitude;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Details Screen"
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={isFormComplete() ? SaveAction : null}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Form
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          location={location}
          setLocation={setLocation}
        />
      </Layout>
    </SafeAreaView>
  );
};
