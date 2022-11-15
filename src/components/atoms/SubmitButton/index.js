import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const SubmitButton = ({ label, disabled, onPress }) => {
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} style={styles.container(disabled)} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  container: (disabled) => ({
    // height: 45,
    paddingVertical: 10,
    backgroundColor: disabled ? '#7C7C7C' : '#000',
    justifyContent: 'center',
    borderRadius: 5
  }),
  label: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(18),
    textAlign: 'center',
    color: '#fff'
  }
})