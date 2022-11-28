import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {BackButton, Gap, TotalCard, Transaction} from '../../components';
import {
  getWhislistAllAction,
  loadMoreWhislistTransactionAction,
} from '../../redux/action';

const WhislistTransaction = ({route, navigation}) => {
  const [page, setPage] = useState(0);

  const {whislistDetail, whislistTransactions} = useSelector(
    state => state.whislistReducer,
  );

  const {id} = route.params;
  const dispatch = useDispatch();
  const didMount = useRef(false);

  useFocusEffect(
    useCallback(() => {
      setPage(0);
      dispatch(getWhislistAllAction(page, id));
    }, []),
  );

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (page !== 0) {
      dispatch(loadMoreWhislistTransactionAction(page, id));
    }
  }, [page]);

  const loadMore = () => {
    if (page * 10 < whislistDetail.total_transaction) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackButton type="transaction" />
          <Gap width={10} />
          <Text style={styles.title}>Whislist</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.WhislistName}>{whislistDetail.whislist_name}</Text>
        <Gap height={5} />
        <TotalCard
          type="whislist"
          detail={whislistDetail}
          onPressDeposit={() =>
            navigation.navigate('WhislistDeposit', {id, whislistDetail})
          }
          onPressWithdraw={() =>
            navigation.navigate('WhislistWithdraw', {id, whislistDetail})
          }
          onUpdate={() =>
            navigation.navigate('UpdateWhislist', {id, whislistDetail})
          }
        />
      </View>
      <Gap height={130} />
      <View style={{paddingHorizontal: 30}}>
        <Text style={styles.transactionText}>Transaksi</Text>
      </View>
      <Gap height={15} />
      <FlatList
        contentContainerStyle={{paddingHorizontal: 30, paddingBottom: 15}}
        data={whislistTransactions}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReached={whislistDetail.total_transaction > 10 ? loadMore : false}
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

export default WhislistTransaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#000',
    height: '38%',
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
  WhislistName: {
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
