import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {Form} from '../components/Form';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const SaveIcon = (props) => <Icon {...props} name="checkmark" />;

export const DetailsScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const SaveAction = () => (
    <TopNavigationAction icon={SaveIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Details Screen"
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={SaveAction}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Form />
      </Layout>
    </SafeAreaView>
  );
};
