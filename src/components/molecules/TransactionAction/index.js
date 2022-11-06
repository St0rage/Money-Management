import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcMoney } from '../../../assets'
import { Gap } from '../../../components'
import { RFValue } from 'react-native-responsive-fontsize'

const TransactionAction = ({disabled, label}) => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <IcMoney />
                <Gap width={14} />
                <View>
                    <Text style={styles.label}>Total</Text>
                    <Text style={styles.total}>Rp 12.000.000</Text>
                </View>
            </View>
            <Gap height={20} />
            <TouchableOpacity disabled={disabled} activeOpacity={0.7} style={styles.button(disabled)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TransactionAction

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        borderTopColor: '#000',
        backgroundColor: '#fff',
        padding: 20
    },
    label: {
        fontFamily: 'Nunito-Light',
        fontSize: RFValue(14),
        color: '#828282'
    },
    total: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(16),
        color: '#000'
    },
    button: (disabled) => ({
        backgroundColor: disabled ? '#7C7C7C' : '#000',
        borderRadius: 5,
        paddingVertical: 13
    }),
    buttonLabel: {
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(18),
        color: '#fff'
    }
})