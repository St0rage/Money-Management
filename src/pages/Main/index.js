import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Balance, Gap, NavigationButton, PiggyBankItem, WhislistItem } from '../../components'

const data1 = [];
const data2 = [];

// const data1 = [
//   {
//     'id' : 1,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
//   {
//     'id' : 2,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
//   {
//     'id' : 3,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
//   {
//     'id' : 4,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
//   {
//     'id' : 5,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
//   {
//     'id' : 6,
//     'piggy_bank_name' : 'Pribadi',
//     'total' : '20.000.000'
//   },
// ]

// const data2 = [
//   {
//     'id' : 1,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 10
//   },
//   {
//     'id' : 2,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 20
//   },
//   {
//     'id' : 3,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 30
//   },
//   {
//     'id' : 4,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 40
//   },
//   {
//     'id' : 5,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 50
//   },
//   {
//     'id' : 6,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 60
//   },
//   {
//     'id' : 7,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 70
//   },
//   {
//     'id' : 8,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 80
//   },
//   {
//     'id' : 9,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 90
//   },
//   {
//     'id' : 10,
//     'target' : '5.000.000',
//     'whislist_name' : 'RX 6600 XT',
//     'progress' : 100
//   },
// ]

// const dataTest = [
  
// ]

const Main = () => {
  const [activeLabel, setActiveLabel] = useState('Whislist')

  // Navigasi Antara Tabungan dan Whislist
  const navigate = useCallback((label) => {
    setActiveLabel(label)
  }, []);

  return (
    <View style={styles.page}>
      <Balance />
      <Gap height={10} />
      <View style={styles.navigation}>
        <NavigationButton label="Tabungan" func={navigate} active={activeLabel == 'Tabungan' ? true : false } />
        <Gap width={30} />
        <NavigationButton label="Whislist" func={navigate} active={activeLabel == 'Whislist' ? true : false} />
      </View>
      {
        activeLabel == 'Tabungan' ? (
          <FlatList 
              contentContainerStyle={{ paddingHorizontal: 30, paddingTop: 10 }}
              data={data1}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({item, index}) => (
                <PiggyBankItem 
                  piggy_bank_name={item.piggy_bank_name}
                  total={item.total}
                />
              )}
              ListEmptyComponent={() => (
                <View style={{ marginTop: 20 }}>
                  <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Reguler', fontSize: RFValue(20), color: '#919191' }}>Anda Belum Mempunyai Tabungan</Text>
                </View>
              )}
          />
        ) : (
          <FlatList 
            key={'#'}
            contentContainerStyle={{ paddingHorizontal: 30, paddingTop: 10}}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={data2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => '#' + item.id}
            renderItem={({item, index}) => (
              <WhislistItem 
                whislist_name={item.whislist_name}
                target={item.target}
                progress={item.progress}
              />
            )}
            ListEmptyComponent={() => (
              <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Reguler', fontSize: RFValue(20), color: '#919191' }}>Anda Belum Mempunyai Whislist</Text>
              </View>
            )}
          />
        )
      }

      {/* <FlatList 
            contentContainerStyle={{ paddingHorizontal: 30, paddingTop: 10}}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={data2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            // horizontal={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <WhislistItem 
                whislist_name={item.whislist_name}
                target={item.target}
                progress={item.progress}
              />
            )}
      /> */}

      
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor : '#F0F0F0'
    },
    navigation: {
      paddingHorizontal: 30,
      flexDirection: 'row'
    }
})