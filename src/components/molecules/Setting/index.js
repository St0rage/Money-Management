import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcExpandRight, IcLock, IcLogout, IcUserAdd } from '../../../assets'

const Icon = ({type}) => {
    switch(type) {
        case 'add-user' :
            return <IcUserAdd />
        case 'change-password' :
            return <IcLock />
        case 'logout' :
            return <IcLogout />
        default :
            return <IcLock />
    }
}

const Setting = ({label, type, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={onPress}>
            <Icon type={type} />
            <Text style={styles.label}>{label}</Text>
            <IcExpandRight />
        </TouchableOpacity>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        // height: 50,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2DCDC'
    },
    label: {
        flex: 1,
        marginLeft: 10,
        fontFamily: 'Nunito-Reguler',
        fontSize: RFValue(15),
        color: '#000'
    }
})