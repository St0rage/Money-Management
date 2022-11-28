import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {updatePiggyBankAction} from '../../redux/action';

const UpdatePiggyBank = ({route, navigation}) => {
  const {id, piggyBankDetail} = route.params;

  const [data, setData] = useState({
    piggy_bank_name: piggyBankDetail.piggy_bank_name,
  });

  const dispatch = useDispatch();

  const update = () => {
    dispatch(updatePiggyBankAction(data, id, navigation));
  };

  return (
    <View style={styles.page}>
      <BackButton />
      <Text style={styles.title}>Ubah Tabungan</Text>
      <View style={styles.form}>
        <TextInput
          label="Nama Tabungan"
          placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"'
          value={data.piggy_bank_name}
          onChangeText={value => setData({...data, piggy_bank_name: value})}
        />
        <Gap height={30} />
        <SubmitButton
          label="Ubah"
          disabled={!Boolean(data.piggy_bank_name)}
          onPress={update}
        />
      </View>
    </View>
  );
};

export default UpdatePiggyBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 30,
  },
  backButton: {
    marginTop: 25,
    paddingVertical: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
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
