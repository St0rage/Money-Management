import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Gap, TransactionButton} from '../../atoms';
import {RFValue} from 'react-native-responsive-fontsize';
import {IcKebab} from '../../../assets';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import currency from 'currency.js';

const TotalCard = ({detail, type = 'piggy-bank'}) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return type == 'piggy-bank' ? (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.label}>Total</Text>
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={showMenu}
              style={{paddingLeft: 5}}>
              <IcKebab />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem textStyle={styles.menuText('reg')}>Update</MenuItem>
          <MenuDivider />
          <MenuItem textStyle={styles.menuText('del')}>Delete</MenuItem>
        </Menu>
      </View>
      <Gap height={5} />
      <Text style={styles.total}>
        {currency(detail.piggy_bank_total, {
          separator: '.',
          symbol: 'Rp',
        }).format()}
      </Text>
      <Gap height={15} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TransactionButton label="Deposit" />
        <TransactionButton label="Withdraw" />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.label}>Total</Text>
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={showMenu}
              style={{paddingLeft: 5}}>
              <IcKebab />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem textStyle={styles.menuText('reg')}>Update</MenuItem>
          <MenuDivider />
          <MenuItem textStyle={styles.menuText('del')}>Delete</MenuItem>
        </Menu>
      </View>
      <Gap height={5} />
      <Text style={styles.total}>Rp 12.000.000</Text>
      <Gap height={15} />
      <Text style={styles.label}>Target</Text>
      <Gap height={5} />
      <Text style={styles.total}>Rp 50.000.000</Text>
      <Gap height={15} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TransactionButton label="Deposit" />
        <TransactionButton label="Withdraw" />
      </View>
    </View>
  );
};

export default TotalCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  label: {
    fontFamily: 'Nunito-ExtraLight',
    fontSize: RFValue(22),
    color: '#828282',
  },
  total: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(32),
    color: '#000',
  },
  menuText: type => ({
    fontFamily: 'Nunito-SemiBold',
    fontSize: RFValue(14),
    color: type == 'del' ? 'red' : '#000',
  }),
});
