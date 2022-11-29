import React from 'react';
import Default from './Default';
import Fail from './Fail';
import Loading from './Loading';
import Success from './Success';

const Switch = ({type, show, onCancelPressed, onConfirmPressed, message}) => {
  switch (type) {
    case 'default':
      return (
        <Default
          show={show}
          message={message}
          onCancelPressed={onCancelPressed}
          onConfirmPressed={onConfirmPressed}
        />
      );
    case 'loading':
      return <Loading />;
    case 'success':
      return (
        <Success
          show={show}
          message={message}
          onConfirmPressed={onConfirmPressed}
        />
      );
    case 'fail':
      return (
        <Fail
          show={show}
          message={message}
          onConfirmPressed={onConfirmPressed}
        />
      );
    default:
      return (
        <Default
          show={show}
          message={message}
          onCancelPressed={onCancelPressed}
          onConfirmPressed={onConfirmPressed}
        />
      );
  }
};

const Alert = ({type, show, onConfirmPressed, onCancelPressed, message}) => {
  return (
    <Switch
      type={type}
      show={show}
      message={message}
      onConfirmPressed={onConfirmPressed}
      onCancelPressed={onCancelPressed}
    />
  );
};

export default Alert;
