import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated/src';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text, YStack } from '@src/features';

interface IProps extends TextInputProps {
  textStyle?: TextStyle;
}

export function AnimatedTextInput({
  placeholderTextColor,
  onChangeText,
  style,
  placeholder,
  textStyle,
  ...rest
}: IProps) {
  const { styles } = useStyles(stylesheet);

  const labelOpacity = useSharedValue(0);
  const labelStyle = useAnimatedStyle(() => ({
    opacity: labelOpacity.value,
  }));

  const placeholderOpacity = useSharedValue(1);
  const placeholderStyle = useAnimatedStyle(() => ({
    opacity: placeholderOpacity.value,
  }));

  const hasText = React.useRef(false);

  const onChangeTextOuter = React.useCallback(
    (text: string) => {
      onChangeText?.(text);

      hasText.current = !!text;
    },
    [onChangeText],
  );

  const onFocus = React.useCallback(() => {
    'worklet';
    labelOpacity.value = withTiming(1, { duration: 100 });
    placeholderOpacity.value = withTiming(0, { duration: 100 });
  }, [labelOpacity, placeholderOpacity]);

  const onBlur = React.useCallback(() => {
    if (hasText.current) return;

    labelOpacity.value = withTiming(0, { duration: 100 });
    placeholderOpacity.value = withTiming(1, { duration: 100 });
  }, [labelOpacity, placeholderOpacity]);

  return (
    <View style={[styles.root, style]}>
      <Animated.View style={[styles.label, labelStyle]}>
        <Text size="sm" style={{ color: placeholderTextColor }}>
          {placeholder}
        </Text>
      </Animated.View>
      <Animated.View style={[styles.placeholder, placeholderStyle]}>
        <YStack jc="center" flex={1}>
          <Text size="lg" style={{ color: placeholderTextColor }}>
            {placeholder}
          </Text>
        </YStack>
      </Animated.View>
      <RNTextInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeTextOuter}
        style={[styles.input, textStyle]}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    padding: 10,
  },

  input: {
    backgroundColor: 'transparent',
    fontSize: 18,
    paddingTop: 14,
  },

  label: {
    position: 'absolute',
    top: 0,
    left: 5,
    padding: 5,
  },

  placeholder: {
    position: 'absolute',
    left: 5,
    top: 10,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
}));
