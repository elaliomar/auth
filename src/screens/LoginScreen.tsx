// src/screens/LoginScreen.tsx
import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {setAuthToken} from '../redux/authSlice';
import {setUserData} from '../redux/userSlice';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('kminchelle');
  const [password, setPassword] = useState<string>('0lelplR');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onLogin = async () => {
    try {
      setLoading(true);
      const result = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      dispatch(setAuthToken(result.data.token));
      dispatch(
        setUserData({
          id: result.data.id,
          username: result.data.username,
          email: result.data.email,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          gender: result.data.gender,
          image: result.data.image,
        }),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="username"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Login"
          onPress={onLogin}
          disabled={!username || !password || loading}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    marginBottom: 20,
  },
});

export default LoginScreen;
