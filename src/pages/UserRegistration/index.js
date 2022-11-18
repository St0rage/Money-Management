import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';

const UserRegistration = () => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <BackButton />
        <Text style={styles.title}>Buat User Baru</Text>
        <View style={styles.form}>
          <TextInput label="Nama" placeholder="nama user" />
          <Gap height={20} />
          <TextInput label="Email" placeholder="contoh@email.com" />
          <Gap height={30} />
          <SubmitButton label="Submit" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UserRegistration;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 30,
  },
  title: {
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
