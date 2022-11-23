import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {changePasswordAction} from '../../redux/action';

const ChangePassword = ({navigation}) => {
  const initialState = {
    password: '',
    password_confirmation: '',
  };

  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(changePasswordAction(data, setData, initialState, navigation));
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <BackButton />
        <Text style={styles.title}>Ubah Password</Text>
        <View style={styles.form}>
          <TextInput
            label="Password"
            placeholder="password"
            type="password"
            value={data.password}
            onChangeText={value => setData({...data, password: value})}
          />
          <Gap height={20} />
          <TextInput
            label="Konfirmasi Password"
            placeholder="konfirmasi password"
            type="password"
            value={data.password_confirmation}
            onChangeText={value =>
              setData({...data, password_confirmation: value})
            }
          />
          <Gap height={30} />
          <SubmitButton
            label="Ubah"
            disabled={!Boolean(data.password && data.password_confirmation)}
            onPress={onSubmit}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 30,
  },
  title: {
    // paddingTop: 93,
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(26),
    color: '#000000',
  },
  form: {
    marginTop: 50,
  },
});
