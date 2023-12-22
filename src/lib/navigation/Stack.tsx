import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/Onboarding/LoginScreen';
import CreateAccountScreenOne from '@src/screens/Onboarding/CreateAccount/CreateAccountScreenOne';

const S = createNativeStackNavigator();

export function Stack() {
  const isLoggedIn = false;

  return (
    <S.Navigator>
      {!isLoggedIn && (
        <>
          <S.Group>
            <S.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </S.Group>
          <S.Group screenOptions={{ title: 'Create Account' }}>
            <S.Screen
              name="CreateAccountOne"
              component={CreateAccountScreenOne}
            />
          </S.Group>
        </>
      )}
    </S.Navigator>
  );
}
