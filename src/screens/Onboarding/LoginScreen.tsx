import React from 'react';
import {
  AnimatedTextInput,
  Button,
  FullScrollView,
  Spacer,
  TextInput,
  ViewWithOpacity,
  YStack,
} from '@src/features';
import { Image, ImageBackground } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useNav } from '@src/hooks/useNav';
import { RootStackParamList } from '@src/lib/navigation';
import { KeyboardAvoidingView } from 'react-native';

export default function LoginScreen() {
  const { styles, theme } = useStyles(stylesheet);

  const navigation = useNav<RootStackParamList, 'CreateAccountOne'>();

  const onCreateAccountPress = () => navigation.push('CreateAccountOne');

  return (
    <ImageBackground
      source={require('../../../assets/splash.png')}
      style={styles.imageBackground}
      blurRadius={50}
    >
      <ViewWithOpacity>
        <KeyboardAvoidingView
          behavior="padding"
          contentContainerStyle={styles.outer}
          style={{ flex: 1 }}
        >
          <FullScrollView keyboardShouldPersistTaps="handled">
            <YStack flex={1} jc="space-between" style={styles.container}>
              <YStack ai="center">
                <Image
                  source={require('../../../assets/icon.png')}
                  style={styles.logo}
                />
              </YStack>
              <YStack jc="center">
                <AnimatedTextInput
                  placeholder="Identifier"
                  placeholderTextColor={theme.colors.secondaryText}
                  style={styles.textInput}
                  textStyle={styles.textInputText}
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoComplete="username"
                />
                <AnimatedTextInput
                  placeholder="Password"
                  placeholderTextColor={theme.colors.secondaryText}
                  style={styles.textInput}
                  textStyle={styles.textInputText}
                  secureTextEntry
                  autoComplete="password"
                />
                <Spacer />
                <Button>Login</Button>
                <Button type="transparent">Forgot password?</Button>
              </YStack>
              <YStack jc="center">
                <Button type="border" onPress={onCreateAccountPress}>
                  Create an Account
                </Button>
              </YStack>
            </YStack>
          </FullScrollView>
        </KeyboardAvoidingView>
      </ViewWithOpacity>
    </ImageBackground>
  );
}

const stylesheet = createStyleSheet({
  outer: {
    flex: 1,
  },

  container: {
    marginHorizontal: 12,
    marginTop: 200,
    marginBottom: 50,
  },

  imageBackground: {
    flex: 1,
  },

  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },

  textInput: {
    backgroundColor: '#170c26',
    borderWidth: 1,
    borderColor: '#6d6d72',
    color: 'white',
  },

  textInputText: {
    color: 'white',
  },
});
