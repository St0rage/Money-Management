import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Gap, SubmitButton, TextInput } from '../../components/atoms'

const PrimaryPiggyBank = () => {
  return (
    <View style={styles.page}>
        <Text style={styles.title}>Buat Tabungan Utama</Text>
        <View style={styles.form}>
            <TextInput label='Nama Tabungan' placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"' />
            <Gap height={30} />
            <SubmitButton label='Buat' />
        </View>
    </View>
  )
}

export default PrimaryPiggyBank

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 30
    },
    title: {
        marginTop: 100,
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(26),
        color: '#000000'
    },
    form: {
        marginTop: 50
    }
})