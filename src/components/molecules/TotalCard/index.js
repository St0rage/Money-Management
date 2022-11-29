import {useNavigation} from '@react-navigation/native';
import currency from 'currency.js';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {IcKebab} from '../../../assets';
import {
  deletePiggyBankAction,
  deleteWhislistAction,
} from '../../../redux/action';
import {Alert, Gap, TransactionButton} from '../../atoms';

const TotalCard = ({
  id,
  detail,
  type = 'piggy-bank',
  onPressDeposit,
  onPressWithdraw,
  onUpdate,
}) => {
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Kebab Menu
  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  // Alert and Delete
  const showAlert = () => {
    setAlert(true);
  };
  const confirmAlertSuccess = () => {
    setAlertSuccess(false);
    navigation.reset({index: 0, routes: [{name: 'Main'}]});
  };
  const onDeletePiggyBank = () => {
    dispatch(
      deletePiggyBankAction(
        id,
        setAlert,
        setMessage,
        setAlertSuccess,
        setAlertFail,
      ),
    );
  };
  const onDeleteWhislist = () => {
    dispatch(
      deleteWhislistAction(
        id,
        setAlert,
        setMessage,
        setAlertSuccess,
        setAlertFail,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {type == 'piggy-bank' ? (
        <>
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
              <MenuItem textStyle={styles.menuText('reg')} onPress={onUpdate}>
                Ubah
              </MenuItem>
              <MenuDivider />
              <MenuItem textStyle={styles.menuText('del')} onPress={showAlert}>
                Hapus
              </MenuItem>
            </Menu>
          </View>
          <Gap height={5} />
          <Text style={styles.total}>
            {currency(detail.piggy_bank_total, {
              separator: '.',
              symbol: 'Rp ',
            }).format()}
          </Text>
          <Gap height={15} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TransactionButton label="Deposit" onPress={onPressDeposit} />
            <TransactionButton label="Withdraw" onPress={onPressWithdraw} />
          </View>
        </>
      ) : (
        <>
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
              <MenuItem textStyle={styles.menuText('reg')} onPress={onUpdate}>
                Ubah
              </MenuItem>
              <MenuDivider />
              <MenuItem textStyle={styles.menuText('del')} onPress={showAlert}>
                Hapus
              </MenuItem>
            </Menu>
          </View>
          <Gap height={5} />
          <Text style={styles.total}>
            {currency(detail.whislist_total, {
              separator: '.',
              symbol: 'Rp ',
            }).format()}
          </Text>
          <Gap height={15} />
          <Text style={styles.label}>Target</Text>
          <Gap height={5} />
          <Text style={styles.total}>
            {currency(detail.whislist_target, {
              separator: '.',
              symbol: 'Rp ',
            }).format()}
          </Text>
          <Gap height={15} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TransactionButton label="Deposit" onPress={onPressDeposit} />
            <TransactionButton label="Withdraw" onPress={onPressWithdraw} />
          </View>
        </>
      )}

      <Alert
        type="default"
        show={alert}
        message={
          type == 'piggy-bank'
            ? 'Yakin ingin menghapus tabungan ini? Semua saldo akan dipindahkan ke tabungan Utama'
            : 'Yakin ingin menghapus whislist ini? Semua saldo akan dipindahkan ke tabungan Utama'
        }
        onConfirmPressed={
          type == 'piggy-bank' ? onDeletePiggyBank : onDeleteWhislist
        }
        onCancelPressed={() => setAlert(false)}
      />

      <Alert
        type="success"
        message={message}
        show={alertSuccess}
        onConfirmPressed={confirmAlertSuccess}
      />

      <Alert
        type="fail"
        message={message}
        show={alertFail}
        onConfirmPressed={() => setAlertFail(false)}
      />
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
