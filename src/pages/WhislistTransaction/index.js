import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IcBackWhite} from '../../assets';
import {BackButton, Gap, TotalCard, Transaction} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {
  setLoading,
  setWhislistDetail,
  setWhislistTransactions,
} from '../../redux/action';
import {getData} from '../../utils';
import axios from 'axios';
import {API_HOST} from '../../config';

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
      dispatch(setLoading(true));
      getData('token').then(res => {
        const getDetail = axios.get(`${API_HOST.url}/whislist/${id}/detail`, {
          headers: {
            Accept: 'application/json',
            Authorization: res.value,
          },
        });
        const getTransactions = axios.get(
          `${API_HOST.url}/whislist/${id}/transactions`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: res.value,
            },
            params: {
              page: page,
            },
          },
        );

        axios.all([getDetail, getTransactions]).then(
          axios.spread((...response) => {
            const resDetail = response[0];
            const resTransactions = response[1];

            console.log(resTransactions);
            dispatch(setWhislistDetail(resDetail.data.data));
            dispatch(setWhislistTransactions(resTransactions.data.data));
            dispatch(setLoading(false));
          }),
        );
      });
    }, []),
  );

  useEffect(() => {
    console.log('whislistTransactions', whislistTransactions);
  }, [whislistTransactions]);

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
        <TotalCard type="whislist" detail={whislistDetail} />
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
