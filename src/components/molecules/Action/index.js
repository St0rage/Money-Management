import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcPlus } from '../../../assets'

const Action = ({label}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
        <IcPlus />
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Action

const styles = StyleSheet.create({
    container: {
        // width: 180,
        // height: 55,
        width: '49%',
        paddingVertical: 14,
        flexDirection: 'row',
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(14),
        color: '#fff',
        marginLeft: 10
    }
})