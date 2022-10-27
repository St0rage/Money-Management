import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { IcBackWhite } from '../../assets'
import { Gap, TotalCard, Transaction } from '../../components'

const PiggyBankTransaction = () => {

    const data = [
        {
            id: 1,
            type: 1
        },
        {
            id: 2,
            type: 0
        },
        {
            id: 3,
            type: 1
        },
        {
            id: 4,
            type: 0
        },
        {
            id: 5,
            type: 1
        },
        {
            id: 6,
            type: 0
        },
        {
            id: 7,
            type: 1
        },
        {
            id: 8,
            type: 0
        },
        {
            id: 9,
            type: 1
        },
        {
            id: 10,
            type: 0
        }
    ]

    return (
        <View style={styles.page}>
            <View style={styles.header} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity activeOpacity={0.7} style={{ padding: 5 }}>
                        <IcBackWhite />
                    </TouchableOpacity>
                    <Gap width={10} />
                    <Text style={styles.title}>Tabungan</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.piggyBankName}>Pribadi</Text>
                <Gap height={5} />
                <TotalCard />
            </View>
            <View style={{ paddingHorizontal: 30, marginTop: 105 }}>
                <Text style={styles.transactionText}>Transaksi</Text>
            </View>
            {/* <View style={{ paddingHorizontal: 30, marginTop: 15}}>
                <Transaction type={1} />
                <Transaction type={0} />
                <Transaction type={1} />
            </View> */}
            <FlatList 
                contentContainerStyle={{ paddingHorizontal: 30, marginTop: 15, paddingBottom: 15 }}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => (
                    <Transaction type={item.type} />
                )}

            />
        </View>
    )
}

export default PiggyBankTransaction

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    header: {
        backgroundColor: '#000',
        height: '30%',
        paddingHorizontal: 30,
        paddingTop: 20
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
    piggyBankName: {
        fontFamily: 'Nunito-Medium',
        fontSize: RFValue(27),
        color: '#fff'
    },
    transactionText: {
        fontFamily: 'Nunito-Reguler',
        fontSize: RFValue(26),
        color: '#000'
    }
})