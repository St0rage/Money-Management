import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dummy1, IcBackWhite} from '../../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

const UserInfo = ({name, email}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <IcBackWhite />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Image source={Dummy1} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    // height: 280,
    height: '43%',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  backButton: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  wrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 20,
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(22),
    color: '#fff',
  },
  email: {
    marginTop: 8,
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(17),
    color: '#fff',
  },
});
