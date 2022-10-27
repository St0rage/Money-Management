import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const NavigationButton = ({label, active, func}) => {

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => func(label)}>
        <Text style={styles.label(active)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default NavigationButton

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20
    },
    label: (active) => ({
        fontFamily: 'Nunito-Reguler',
        fontSize: RFValue(16),
        color: active ? '#000' : '#919191'
    })
})