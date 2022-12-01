import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {createWhislistAction} from '../../redux/action';

const CreateWhislist = () => {
  const intialState = {
    whislist_name: '',
    whislist_target: '0',
  };

  const [data, setData] = useState(intialState);

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(createWhislistAction(data, setData, intialState));
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <BackButton />
        <Text style={styles.title}>Buat Wishlist</Text>
        <View style={styles.form}>
          <TextInput
            label="Nama Wishlist"
            placeholder='nama wishlist "sepatu, tas, baju, dll"'
            value={data.whislist_name}
            onChangeText={value => setData({...data, whislist_name: value})}
          />
          <Gap height={20} />
          <TextInput
            label="Target Wishlist"
            placeholder="Rp xxx"
            type="numeric"
            value={data.whislist_target}
            onChangeText={value =>
              setData({
                ...data,
                whislist_target: parseInt(
                  value.substring(2).split('.').join(''),
                ),
              })
            }
          />
          <Gap height={30} />
          <SubmitButton
            label="Buat"
            disabled={
              !Boolean(data.whislist_name && data.whislist_target >= 10000)
            }
            onPress={submit}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateWhislist;

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
