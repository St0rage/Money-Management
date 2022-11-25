import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {BackButton, Gap, TotalCard, Transaction} from '../../components';
import {
  getPiggyBankDetailTransactionAction,
  loadMorePiggybankTransactionAction,
} from '../../redux/action';

const PiggyBankTransaction = ({route, navigation}) => {
  const [page, setPage] = useState(0);

  const {piggyBankDetail, piggyBankTransactions} = useSelector(
    state => state.piggyBankReducer,
  );

  const {id} = route.params;
  const dispatch = useDispatch();
  const didMount = useRef(false);

  useFocusEffect(
    useCallback(() => {
      setPage(0);
      dispatch(getPiggyBankDetailTransactionAction(page, id));
    }, []),
  );

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (page !== 0) {
      dispatch(loadMorePiggybankTransactionAction(page, id));
    }
  }, [page]);

  const loadMore = () => {
    if (page * 10 < piggyBankDetail.total_transaction) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackButton type="transaction" />
          <Gap width={10} />
          <Text style={styles.title}>Tabungan</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.piggyBankName}>
          {piggyBankDetail.piggy_bank_name}
        </Text>
        <Gap height={5} />
        <TotalCard
          detail={piggyBankDetail}
          type="piggy-bank"
          onPressDeposit={() =>
            navigation.navigate('PiggyBankDeposit', {id, piggyBankDetail})
          }
          onPressWithdraw={() =>
            navigation.navigate('PiggyBankWithdraw', {id, piggyBankDetail})
          }
        />
      </View>
      <Gap height={95} />
      <View style={{paddingHorizontal: 30}}>
        <Text style={styles.transactionText}>Transaksi</Text>
      </View>
      <Gap height={15} />
      <FlatList
        contentContainerStyle={{paddingHorizontal: 30, paddingBottom: 15}}
        data={piggyBankTransactions}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReached={piggyBankDetail.total_transaction > 10 ? loadMore : false}
        renderItem={({item, index}) => (
          <Transaction
            type={item.status}
            amount={item.amount}
            date={item.date}
            transactionName={item.transaction_name}
          />
        )}
      />
    </View>
  );
};

export default PiggyBankTransaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#000',
    height: '30%',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Nunito-Light',
    fontSize: RFValue(22),
    color: '#fff',
  },
  card: {
    position: 'absolute',
    paddingHorizontal: 30,
    width: '100%',
    marginTop: '20%',
  },
  piggyBankName: {
    fontFamily: 'Nunito-Medium',
    fontSize: RFValue(27),
    color: '#fff',
  },
  transactionText: {
    fontFamily: 'Nunito-Reguler',
    fontSize: RFValue(26),
    color: '#000',
  },
});
