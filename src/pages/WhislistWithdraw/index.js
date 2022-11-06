import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IcBackWhite } from '../../assets'
import { Gap, TransactionAction, TransactionCardWithdraw } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

const WhislistWithdraw = () => {

    const [amount, setAmount] = useState('0');

    useEffect(() => {
        console.log(parseInt(amount.substring(2).split('.').join("")))
    }, [amount])

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity activeOpacity={0.7} style={{ padding: 5 }}>
                        <IcBackWhite />
                    </TouchableOpacity>
                    <Gap width={10} />
                    <Text style={styles.title}>Withdraw</Text>
                </View>
            </View>
            <View style={styles.card}>
                <TransactionCardWithdraw type='whislist' name='B660 Steel Legend' value={amount} onChangeText={value => setAmount(value)} />
            </View>
            <TransactionAction label='Withdraw' disabled={parseInt(amount.substring(2).split('.').join("")) >= 10000 ? false : true} />
        </View>
    )
}

export default WhislistWithdraw

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 20,
        height: '20%',
        backgroundColor: '#000'
    },
    title: {
        fontFamily: 'Nunito-Light',
        fontSize: RFValue(22),
        color: '#fff'
    },
    card: {
        position: 'absolute',
        paddingHorizontal: 30,
        width: '100%',
        marginTop: '20%'
    },
})