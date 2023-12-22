import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/Onboarding/LoginScreen';

const S = createNativeStackNavigator();

export function Stack() {
  const isLoggedIn = false;

  return (
    <S.Navigator>
      {!isLoggedIn && (
        <S.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <S.Screen name="Login" component={LoginScreen} />
        </S.Group>
      )}
    </S.Navigator>
  );
}
