import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {createPiggyBank} from '../../redux/action';

const CreatePiggyBank = () => {
  const intialState = {
    piggy_bank_name: '',
  };

  const [data, setData] = useState(intialState);

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(createPiggyBank(data, setData, intialState));
  };

  return (
    <View style={styles.page}>
      <BackButton />
      <Text style={styles.title}>Buat Tabungan</Text>
      <View style={styles.form}>
        <TextInput
          label="Nama Tabungan"
          placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"'
          value={data.piggy_bank_name}
          onChangeText={value => {
            setData({...data, piggy_bank_name: value});
          }}
        />
        <Gap height={30} />
        <SubmitButton
          label="Buat"
          disabled={!Boolean(data.piggy_bank_name)}
          onPress={submit}
        />
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
