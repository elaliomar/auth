// src/screens/HomeScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {RootState} from '../redux/store';
import {clearAuthToken} from '../redux/authSlice';

const HomeScreen: React.FC = () => {
  const {id, username, email, firstName, lastName, gender, image} = useSelector(
    (state: RootState) => state.user,
  );
  const {authToken} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const user = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(user.data);
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };

  useEffect(() => {
    // Example API call
    // setData('data from api');
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>
        {JSON.stringify(
          {id, username, email, firstName, lastName, gender, image},
          null,
          2,
        )}
      </Text>
      <Button title="Get current auth user" onPress={getUser} />
      <Button
        title="Logout"
        onPress={() => {
          dispatch(clearAuthToken());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
