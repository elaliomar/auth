// src/App.tsx
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/stacks/AuthStack';
import UnAuthStack from './src/stacks/UnAuthStack';
import {store, persistor, RootState} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthContent />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const AuthContent: React.FC = () => {
  const authToken = useSelector((state: RootState) => state.auth.authToken);
  return authToken ? <AuthStack /> : <UnAuthStack />;
};

export default App;
