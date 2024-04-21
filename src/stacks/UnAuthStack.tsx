import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const UnAuthStackNavigator = createNativeStackNavigator();
const UnAuthStack = () => {
  return (
    <UnAuthStackNavigator.Navigator>
      <UnAuthStackNavigator.Screen name="login" component={LoginScreen} />
    </UnAuthStackNavigator.Navigator>
  );
};

export default UnAuthStack;

const styles = StyleSheet.create({});
