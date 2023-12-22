import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface IProps extends TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Text({ children, color, size, style, ...rest }: IProps) {
  const { styles } = useStyles(stylesheet, { size, color });

  return (
    <RNText {...rest} style={[styles.root, style]}>
      {children}
    </RNText>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
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
