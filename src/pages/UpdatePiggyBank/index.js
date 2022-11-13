import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Gap, SubmitButton, TextInput } from '../../components/atoms'
import { IcBack } from '../../assets'

const UpdatePiggyBank = () => {

    return (
        <View style={styles.page}>
            <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
                <IcBack />
            </TouchableOpacity>
            <Text style={styles.title}>Ubah Tabungan</Text>
            <View style={styles.form}>
                <TextInput label='Nama Tabungan' placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"' />
                <Gap height={30} />
                <SubmitButton label='Ubah' />
            </View>
        </View>
    )
}

export default UpdatePiggyBank

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 30
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
        color: '#000000'
    },
    form: {
        marginTop: 50
    }
})