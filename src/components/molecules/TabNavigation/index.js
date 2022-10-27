import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const TabNavigation = ({}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.label}>Tabungan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.label}>Whislist</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button1:{
        paddingVertical: 20
    },
    button2: {
        paddingVertical: 20,
        marginLeft: 30
    },
    label: {
        fontFamily: 'Nunito-Reguler',
        fontSize: RFValue(16),
        color: '#000'
    }
})