import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {BackButton, Gap, SubmitButton, TextInput} from '../../components/atoms';
import {updateWhislistAction} from '../../redux/action';

const UpdateWhislist = ({route, navigation}) => {
  const {id, whislistDetail} = route.params;

  const [data, setData] = useState({
    whislist_name: whislistDetail.whislist_name,
    whislist_target: whislistDetail.whislist_target.replace('.00', ''),
  });

  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateWhislistAction(data, id, navigation));
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <BackButton />
        <Text style={styles.title}>Ubah Whislist</Text>
        <View style={styles.form}>
          <TextInput
            label="Nama Whislist"
            placeholder='nama whislist "sepatu, tas, baju, dll"'
            value={data.whislist_name}
            onChangeText={value => setData({...data, whislist_name: value})}
          />
          <Gap height={20} />
          <TextInput
            label="Target Whislist"
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
            label="Ubah"
            disabled={
              !Boolean(data.whislist_name && data.whislist_target >= 10000)
            }
            onPress={update}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UpdateWhislist;

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
