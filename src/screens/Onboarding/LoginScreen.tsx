import React from 'react';
import { Button, YStack } from '@src/features';
import { ImageBackground } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import ViewWithOpacity from '@src/features/ui/ViewWithOpacity';
import TextInput from '@src/features/ui/TextInput';
import Spacer from '@src/features/ui/Spacer';

export default function LoginScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <YStack flex={1}>
      <ImageBackground
        source={require('../../../assets/splash.png')}
        style={styles.imageBackground}
        blurRadius={50}
      >
        <ViewWithOpacity>
          <YStack flex={1} jc="center" style={styles.container}>
            <TextInput
              placeholder="Identifier"
              size="md"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              size="md"
              style={styles.textInput}
            />
            <Spacer />
            <Button>Login</Button>
            <Button type="transparent">Forgot password?</Button>
          </YStack>
        </ViewWithOpacity>
      </ImageBackground>
    </YStack>
  );
}

const stylesheet = createStyleSheet({
  container: {
    marginHorizontal: 12,
  },

  imageBackground: {
    flex: 1,
  },

  textInput: {
    backgroundColor: '#170c26',
    borderWidth: 1,
    borderColor: '#6d6d72',
    color: 'white',
  },
});
