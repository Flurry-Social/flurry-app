import React from 'react';
import './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from '@src/lib/navigation/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
