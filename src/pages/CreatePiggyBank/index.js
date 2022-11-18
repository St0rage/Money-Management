import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';

const CreatePiggyBank = () => {
  return (
    <View style={styles.page}>
      <BackButton />
      <Text style={styles.title}>Buat Tabungan</Text>
      <View style={styles.form}>
        <TextInput
          label="Nama Tabungan"
          placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"'
        />
        <Gap height={30} />
        <SubmitButton label="Buat" />
      </View>
    </View>
  );
};

export default CreatePiggyBank;

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
