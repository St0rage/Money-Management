import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {Gap, SubmitButton, TextInput} from '../../components/atoms';
import {primaryPiggyBankAction} from '../../redux/action';

const PrimaryPiggyBank = ({navigation}) => {
  const initialState = {
    piggy_bank_name: '',
  };

  const [data, setData] = useState(initialState);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(primaryPiggyBankAction(data, navigation));
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Buat Tabungan Utama</Text>
      <View style={styles.form}>
        <TextInput
          label="Nama Tabungan"
          placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"'
          value={data.piggy_bank_name}
          onChangeText={value => setData({...data, piggy_bank_name: value})}
        />
        <Gap height={30} />
        <SubmitButton
          label="Buat"
          disabled={!Boolean(data.piggy_bank_name)}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default PrimaryPiggyBank;

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
