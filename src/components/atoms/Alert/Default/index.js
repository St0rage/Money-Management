import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {RFValue} from 'react-native-responsive-fontsize';

const Default = ({show, onCancelPressed, onConfirmPressed, message}) => {
  return (
    <>
      <AwesomeAlert
        show={show}
        title="Peringatan!"
        message={message}
        titleStyle={{
          fontFamily: 'Nunito-SemiBold',
          fontSize: RFValue(18),
          color: 'red',
        }}
        messageStyle={{
          fontFamily: 'Nunito-Reguler',
          fontSize: RFValue(14),
          color: '#000',
          textAlign: 'center',
        }}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Batal"
        confirmText="Delete"
        cancelButtonColor="#000"
        confirmButtonColor="red"
        cancelButtonTextStyle="#fff"
        onCancelPressed={onCancelPressed}
        onConfirmPressed={onConfirmPressed}
        useNativeDriver={true}
      />
    </>
  );
};

export default Default;
