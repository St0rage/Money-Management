import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChangePassword,
  Login,
  PrimaryPiggyBank,
  UserRegistration,
  CreatePiggyBank,
  CreateWhislist,
  UpdatePiggyBank,
  UpdateWhislist,
  Profile,
  Main,
  PiggyBankTransaction,
  WhislistTransaction,
  PiggyBankDeposit,
  WhislistDeposit,
  PiggyBankWithdraw,
  WhislistWithdraw,
  SplashScreen,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrimaryPiggyBank"
        component={PrimaryPiggyBank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      {/* Profile Navigator */}
      <Stack.Screen
        name="UserRegistration"
        component={UserRegistration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePiggyBank"
        component={CreatePiggyBank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateWhislist"
        component={CreateWhislist}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UpdatePiggyBank"
        component={UpdatePiggyBank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateWhislist"
        component={UpdateWhislist}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PiggyBankTransaction"
        component={PiggyBankTransaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PiggyBankDeposit"
        component={PiggyBankDeposit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PiggyBankWithdraw"
        component={PiggyBankWithdraw}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WhislistTransaction"
        component={WhislistTransaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WhislistDeposit"
        component={WhislistDeposit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WhislistWithdraw"
        component={WhislistWithdraw}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
