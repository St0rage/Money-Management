import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Action, Setting, UserInfo} from '../../components';
import {logoutAction} from '../../redux/action';

const Profile = ({navigation}) => {
  const {user} = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutAction(navigation));
  };

  const clear = () => {
    AsyncStorage.clear();
  };

  return (
    <View style={styles.page}>
      <UserInfo name={user.name} email={user.email} />
      <View style={styles.actions}>
        <Action
          label="Buat Tabungan"
          onPress={() => navigation.navigate('CreatePiggyBank')}
        />
        <Action
          label="Buat Whislist"
          onPress={() => navigation.navigate('CreateWhislist')}
        />
      </View>
      <View style={styles.settings}>
        {user.is_admin ? (
          <Setting
            label="Buat User Baru"
            type="add-user"
            onPress={() => navigation.navigate('UserRegistration')}
          />
        ) : null}
        <Setting
          label="Ubah Password"
          type="change-password"
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <Setting label="Logout" type="logout" onPress={logOut} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settings: {
    marginTop: 20,
  },
});
