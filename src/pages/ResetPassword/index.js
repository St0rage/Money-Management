import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {resetPasswordAction} from '../../redux/action';

const ResetPassword = () => {
  const initialState = {
    email: '',
  };

  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetPasswordAction(data, setData, initialState));
  };

  return (
    <View style={styles.page}>
      <BackButton />
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.form}>
        <TextInput
          label="Email"
          placeholder="contoh@email.com"
          value={data.email}
          onChangeText={value => setData({...data, email: value})}
        />
        <Gap height={30} />
        <SubmitButton
          label="Reset"
          disabled={!Boolean(data.email)}
          onPress={reset}
        />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 100,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(26),
    color: '#000000',
  },
  form: {
    marginTop: 50,
  },
});
