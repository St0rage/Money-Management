import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';

const CreateWhislist = () => {
  const [target, setTarget] = useState('0');

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <BackButton />
        <Text style={styles.title}>Buat Whislist</Text>
        <View style={styles.form}>
          <TextInput
            label="Nama Whislist"
            placeholder='nama whislist "sepatu, tas, baju, dll"'
          />
          <Gap height={20} />
          <TextInput
            label="Target Whislist"
            placeholder="Rp xxx"
            type="numeric"
            value={target}
            onChangeText={value => setTarget(value)}
          />
          <Gap height={30} />
          <SubmitButton label="Buat" />
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
