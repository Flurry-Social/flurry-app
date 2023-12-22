import React from 'react';
import './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from '@src/lib/navigation/Stack';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function App() {
  return (
    <KeyboardProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </KeyboardProvider>
  );
}
