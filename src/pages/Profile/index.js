import { StyleSheet, View } from 'react-native'
import React from 'react'
import { UserInfo, Action, Setting } from '../../components'

const Profile = () => {
  return (
    <View style={styles.page}>
        <UserInfo />
        <View style={styles.actions}>
            <Action label='Tambah Tabungan' />
            <Action label='Tambah Whislist' />
        </View>
        <View style={styles.settings}>
            <Setting label="Buat User Baru" type='add-user' />
            <Setting label="Ubah Password" type='change-password' />
            <Setting label="Logout" type='logout' />
        </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    page : {
        backgroundColor: '#F0F0F0',
        flex : 1
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    settings: {
        marginTop : 20
    }
})