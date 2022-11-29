import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {RFValue} from 'react-native-responsive-fontsize';

const Loading = () => {
  return (
    <>
      <AwesomeAlert
        show={true}
        showProgress={true}
        closeOnHardwareBackPress={false}
        closeOnTouchOutside={false}
        title="Loading"
        progressSize="large"
        progressColor="#000"
        titleStyle={{
          fontFamily: 'Nunito-SemiBold',
          fontSize: RFValue(18),
          color: '#000',
        }}
        useNativeDriver={true}
      />
    </>
  );
};

export default Loading;
