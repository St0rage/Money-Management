import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcBack} from '../../../assets';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <IcBack />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginTop: 25,
    paddingVertical: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
});
