import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {IcLogo} from '../../assets';
import {Gap} from '../../components';
import {setUser} from '../../redux/action';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          getData('user').then(res => {
            console.log(res);
            dispatch(setUser(res));
            navigation.reset({index: 0, routes: [{name: 'Main'}]});
          });
        } else {
          navigation.reset({index: 0, routes: [{name: 'Login'}]});
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.page}>
      <IcLogo />
      <Gap height={50} />
      <Text style={styles.title}>Simpan Uang</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(38),
    color: '#000',
  },
});
