import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Balance,
  EmptyWhislist,
  Gap,
  NavigationButton,
  PiggyBankItem,
  WhislistItem,
} from '../../components';

const data1 = [];
const data2 = [];

const Main = () => {
  const [activeLabel, setActiveLabel] = useState('Tabungan');

  const {user} = useSelector(state => state.authReducer);

  // Navigasi Antara Tabungan dan Whislist
  const navigate = useCallback(label => {
    setActiveLabel(label);
  }, []);

  return (
    <View style={styles.page}>
      <Balance name={user.name} />
      <Gap height={10} />
      <View style={styles.navigation}>
        <NavigationButton
          label="Tabungan"
          func={navigate}
          active={activeLabel == 'Tabungan' ? true : false}
        />
        <Gap width={30} />
        <NavigationButton
          label="Whislist"
          func={navigate}
          active={activeLabel == 'Whislist' ? true : false}
        />
      </View>
      {activeLabel == 'Tabungan' ? (
        <FlatList
          contentContainerStyle={{paddingHorizontal: 30, paddingTop: 10}}
          data={data1}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <PiggyBankItem
              piggy_bank_name={item.piggy_bank_name}
              total={item.total}
            />
          )}
        />
      ) : (
        <FlatList
          key={'#'}
          contentContainerStyle={{paddingHorizontal: 30, paddingTop: 10}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={data2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => '#' + item.id}
          renderItem={({item, index}) => (
            <WhislistItem
              whislist_name={item.whislist_name}
              target={item.target}
              progress={item.progress}
            />
          )}
          ListEmptyComponent={EmptyWhislist}
        />
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  navigation: {
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
});
