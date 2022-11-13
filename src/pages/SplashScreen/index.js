import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcLogo } from '../../assets'
import { Gap } from '../../components'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{ name: 'Login'}]})
    }, 2000)
  }, [])

  return (
    <View style={styles.page}>
      <IcLogo />
      <Gap height={50} />
      <Text style={styles.title}>Simpan Uang</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(38),
        color: '#000'
    }
})