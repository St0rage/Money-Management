import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcBack, IcBackWhite} from '../../../assets';

const Icon = ({type}) => {
  switch (type) {
    case 'transaction':
      return <IcBackWhite />;
    default:
      return <IcBack />;
  }
};

const BackButton = ({type}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={
        type == 'transaction'
          ? styles.backButtonTransaction
          : styles.backButtonForm
      }
      onPress={() => navigation.goBack()}>
      <Icon type={type} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonForm: {
    marginTop: 25,
    paddingVertical: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
  backButtonTransaction: {
    padding: 5,
  },
});
