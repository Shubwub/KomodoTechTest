import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {Form} from '../components/Form';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const SaveIcon = (props) => <Icon {...props} name="checkmark" />;

export const DetailsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({});

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const SaveAction = () => (
    <TopNavigationAction icon={SaveIcon} onPress={navigateBack} />
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
