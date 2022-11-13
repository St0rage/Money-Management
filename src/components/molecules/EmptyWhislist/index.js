import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcWhislistEmpty } from '../../../assets'

const EmptyWhislist = () => {
  return (
    <View style={styles.container}>
        <IcWhislistEmpty />
        <Gap height={30} />
        <Text style={styles.label}>Anda Belum Mempunyai Whislist</Text>
    </View>
  )
}

export default EmptyWhislist

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: 'center'
    },
    label: {
        textAlign: 'center', 
        fontFamily: 'Nunito-Reguler', 
        fontSize: RFValue(22), 
        color: '#919191'
    }
})