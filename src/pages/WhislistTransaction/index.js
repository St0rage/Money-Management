import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { IcBackWhite } from '../../assets'
import { Gap, TotalCard, Transaction } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

const WhislistTransaction = () => {

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
                    <Text style={styles.title}>Whislist</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.WhislistName}>B660 Steel Legend</Text>
                <Gap height={5} />
                <TotalCard type='whislist' />
            </View>
            <Gap height={130} />
            <View style={{ paddingHorizontal: 30 }}>
                <Text style={styles.transactionText}>Transaksi</Text>
            </View>
            <Gap height={15} />
            <FlatList 
                contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 15 }}
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

export default WhislistTransaction

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    header: {
        backgroundColor: '#000',
        height: '38%',
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
    WhislistName: {
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