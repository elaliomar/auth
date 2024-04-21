import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const AuthStackNavigator = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="Home" component={HomeScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
