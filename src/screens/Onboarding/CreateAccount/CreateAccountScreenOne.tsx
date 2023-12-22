import React from 'react';
import { TextInput, YStack } from '@src/features';
import { useStyles } from 'react-native-unistyles';
import { createAccountStylesheet } from '@src/styles/features';

export default function CreateAccountScreenOne() {
  const { styles } = useStyles(createAccountStylesheet);

  return (
    <YStack flex={1} style={styles.container}>
      <TextInput placeholder="Name" />
    </YStack>
  );
}
