import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap, TransactionButton } from '../../atoms'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcKebab } from '../../../assets'

const TotalCard = ({type = 'piggy-bank'}) => {
    
    return (
        type == 'piggy-bank' ? (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.label}>Total</Text>
                    <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 5 }}>
                        <IcKebab />
                    </TouchableOpacity>
                </View>
                <Gap height={5} />
                <Text style={styles.total}>Rp 12.000.000</Text>
                <Gap height={15} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TransactionButton label="Deposit" />
                    <TransactionButton label="Withdraw" />
                </View>
            </View>
        ) : (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.label}>Total</Text>
                    <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 5 }}>
                        <IcKebab />
                    </TouchableOpacity>
                </View>
                <Gap height={5} />
                <Text style={styles.total}>Rp 12.000.000</Text>
                <Gap height={15} />
                <Text style={styles.label}>Target</Text>
                <Gap height={5} />
                <Text style={styles.total}>Rp 50.000.000</Text>
                <Gap height={15} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TransactionButton label="Deposit" />
                    <TransactionButton label="Withdraw" />
                </View>
            </View>
        )
    )
}

export default TotalCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 15,

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6
    },
    label: {
        fontFamily: 'Nunito-ExtraLight',
        fontSize: RFValue(22),
        color: '#828282'
    },
    total: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(32),
        color: '#000'
    }
})