import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcSetting } from '../../../assets'

const Balance = () => {
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Text style={styles.label}>Hai, </Text>
                <Text style={styles.username}>Veronica</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
                <IcSetting />
            </TouchableOpacity>
        </View>
        <View style={{ marginTop: 18 }}>
            <Text style={styles.balanceTotal}>Rp 20.000.000</Text>
            <Text style={styles.balanceLabel}>Total Balance</Text>
        </View>
    </View>
  )
}

export default Balance

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        // height: 200,
        height: '30%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 30
    },
    info: {
        // backgroundColor: 'blue',
        marginTop: 31,
        flexDirection: 'row',
        // paddingHorizontal: 30
    },
    label: {
        fontFamily: 'Nunito-Medium',
        fontSize: RFValue(22),
        color: '#C2C2C2'
    },
    username: {
        fontFamily: 'Nunito-Light',
        fontSize: RFValue(22),
        color: '#C2C2C2'
    },
    balanceTotal: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(38),
        color: '#fff'
    },
    balanceLabel: {
        marginTop: 5,
        fontFamily: 'Nunito-Light',
        fontSize: RFValue(17),
        color: '#9D9D9D'
    }
})