import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {Gap, SubmitButton, TextInput} from '../../components/atoms';
import {loginAction} from '../../redux/action';

const Login = ({navigation}) => {
  const initialState = {
    email: '',
    password: '',
  };

  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(loginAction(data, navigation));
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <TextInput
            label="Email"
            placeholder="contoh@email.com"
            value={data.email}
            onChangeText={value => setData({...data, email: value})}
          />
          <Gap height={20} />
          <TextInput
            label="Password"
            placeholder="password"
            type="password"
            value={data.password}
            onChangeText={value => setData({...data, password: value})}
          />
          <Gap height={30} />
          <SubmitButton
            label="Login"
            disabled={!Boolean(data.email && data.password)}
            onPress={login}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
