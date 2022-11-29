import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {RFValue} from 'react-native-responsive-fontsize';

const Success = ({show, onConfirmPressed, message}) => {
  return (
    <AwesomeAlert
      show={show}
      title="Sukses"
      message={message}
      titleStyle={{
        fontFamily: 'Nunito-SemiBold',
        fontSize: RFValue(18),
        color: 'green',
      }}
      messageStyle={{
        fontFamily: 'Nunito-Reguler',
        fontSize: RFValue(14),
        color: '#000',
        textAlign: 'center',
      }}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="Kembali"
      confirmButtonColor="#000"
      confirmButtonTextStyle="$fff"
      onConfirmPressed={onConfirmPressed}
      useNativeDriver={true}
    />
  );
};

export default Success;
