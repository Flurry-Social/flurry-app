import React from 'react';
import { TextInput as Input, TextInputProps, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useSharedValue } from 'react-native-reanimated/src';
import { useAnimatedStyle } from 'react-native-reanimated';

interface IProps extends TextInputProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
}

export function TextInput({ size = 'sm', style, ...rest }: IProps) {
  const { styles, theme } = useStyles(stylesheet, { size });

  return (
    <Input
      style={[styles.root, style]}
      placeholderTextColor={theme.colors.secondaryText}
      {...rest}
    />
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    backgroundColor: theme.colors.background,
    padding: 14,
    borderRadius: 10,
    color: theme.colors.text,

    variants: {
      size: {
        xs: {
          fontSize: 12,
        },
        sm: {
          fontSize: 14,
        },
        md: {
          fontSize: 16,
        },
        lg: {
          fontSize: 18,
        },
        xl: {
          fontSize: 20,
        },
        default: {
          fontSize: 16,
        },
      },
      color: {
        primary: {
          color: theme.colors.text,
        },
        secondary: {
          color: theme.colors.secondaryText,
        },
      },
    },
  },
}));
