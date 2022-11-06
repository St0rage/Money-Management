import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Gap, SubmitButton, TextInput } from '../../components/atoms'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = () => {
  return (
    <KeyboardAwareScrollView>
        <View style={styles.page}>    
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <TextInput label='Email' placeholder='contoh@email.com' />
                <Gap height={20} />
                <TextInput label='Password' placeholder='password' type='password' />
                <Gap height={30} />
                <SubmitButton label='Login' />
            </View>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default Login

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