import React from 'react';
import { Pressable, PressableProps, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '@src/features';

interface IProps extends PressableProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'primary' | 'secondary' | 'transparent';
  children: React.ReactNode;
}

export function Button({ children, size, type, style, ...rest }: IProps) {
  const { styles } = useStyles(stylesheet, { size, type });

  return (
    <Pressable {...rest} style={[styles.root, style as ViewProps]}>
      <Text size="md" style={styles.text}>
        {children}
      </Text>
    </Pressable>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    backgroundColor: theme.colors.accent,
    padding: 10,
    borderRadius: 100,

    variants: {
      size: {
        sm: {
          padding: 5,
        },
        md: {
          padding: 10,
        },
        lg: {
          padding: 15,
        },
      },

      type: {
        primary: {
          backgroundColor: theme.colors.accent,
        },
        secondary: {
          backgroundColor: theme.colors.secondaryAccent,
        },
        transparent: {
          backgroundColor: 'transparent',
        },
      },
    },
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));
