import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const SubmitButton = ({ label }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  container: {
    // height: 45,
    paddingVertical: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 5
  },
  label: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(18),
    textAlign: 'center',
    color: '#fff'
  }
})