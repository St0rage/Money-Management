import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Gap, SubmitButton, TextInput } from '../../components/atoms'
import { IcBack } from '../../assets'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const UpdateWhislist = () => {

    const [target, setTarget] = useState('20000000')

    return (
        <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={50} contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
                    <IcBack />
                </TouchableOpacity>
                <Text style={styles.title}>Ubah Whislist</Text>
                <View style={styles.form}>
                    <TextInput label='Nama Whislist' placeholder='nama whislist "sepatu, tas, baju, dll"' />
                    <Gap height={20} />
                    <TextInput label='Target Whislist' placeholder='Rp xxx' type='numeric' value={target} onChangeText={(value) => setTarget(value)} />
                    <Gap height={30} />
                    <SubmitButton label='Ubah' />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default UpdateWhislist

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