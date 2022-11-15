import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Gap, SubmitButton, TextInput } from '../../components/atoms'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getData, showMessage } from '../../utils'

const PrimaryPiggyBank = () => {

    const initialState = {
        piggy_bank_name: ''
    }

    const [data, setData] = useState(initialState)

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch({type: 'SET_LOADING', value: true})
        getData('token').then(res => {
            axios.post('http://10.0.2.2/aplikasi-manajemen-uang/public/api/piggybank/create', data, {
                headers: {
                    'Accept' : 'application/json',
                    'Authorization' : res.value
                }
            })
            .then(res => {
                console.log(res)
                dispatch({type: 'SET_LOADING', value: false})
            })
            .catch(err => {
                console.log(err.response)
                dispatch({type: 'SET_LOADING', value: false})
                showMessage(err.response.data.message, 'danger')
            })
        })
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Buat Tabungan Utama</Text>
            <View style={styles.form}>
                <TextInput label='Nama Tabungan' placeholder='nama tabungan "pribadi, kesehatan, rumah, dll"' value={data.piggy_bank_name} onChangeText={(value) => setData({...data, piggy_bank_name: value})} />
                <Gap height={30} />
                <SubmitButton label='Buat' disabled={!Boolean(data.piggy_bank_name)} onPress={onSubmit} />
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