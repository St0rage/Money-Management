import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInputMask} from 'react-native-masked-text';
import Gap from '../Gap';

const TextInput = ({label, placeholder, type, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={10} />
      {type != 'numeric' ? (
        <TextInputRN
          placeholder={placeholder}
          placeholderTextColor="#7C7C7C"
          style={styles.input}
          secureTextEntry={type == 'password' ? true : false}
          {...restProps}
        />
      ) : (
        <>
          <TextInputMask
            placeholder={placeholder}
            placeholderTextColor="#7C7C7C"
            style={styles.input}
            keyboardType="number-pad"
            type={'money'}
            options={{
              precision: 0,
              separator: ',',
              delimiter: '.',
              unit: 'Rp ',
              suffixUnit: '',
            }}
            {...restProps}
          />
          <Gap height={5} />
          <Text style={styles.alert}>
            * Minimal target whislist adalah Rp 10.000
          </Text>
        </>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(18),
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 5,
    padding: 12,
    fontFamily: 'Nunito-Reguler',
    fontSize: RFValue(16),
  },
  alert: {
    fontFamily: 'Nunito-Reguler',
    fontSize: RFValue(12),
    color: 'green',
  },
});
