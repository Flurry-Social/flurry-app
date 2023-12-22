import React from 'react';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SizeToken } from '@src/styles';

interface IProps extends ViewProps {
  flex?: 1;
  ai?: 'flex-start' | 'center' | 'flex-end';
  jc?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap: SizeToken;
  children?: React.ReactNode;
}

export function XStack({
  flex,
  ai = 'flex-start',
  jc = 'flex-start',
  gap = 'sm',
  style,
  children,
  ...rest
}: IProps) {
  const { styles } = useStyles(stylesheet, { flex, ai, jc, gap });

  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const stylesheet = createStyleSheet({
  container: {
    variants: {
      flex: {
        1: {
          flex: 1,
        },
        default: {
          flex: 0,
        },
      },
      ai: {
        'flex-start': {
          alignItems: 'flex-start',
        },
        center: {
          alignItems: 'center',
        },
        'flex-end': {
          alignItems: 'flex-end',
        },
      },
      jc: {
        'flex-start': {
          justifyContent: 'flex-start',
        },
        center: {
          justifyContent: 'center',
        },
        'flex-end': {
          justifyContent: 'flex-end',
        },
        'space-between': {
          justifyContent: 'space-between',
        },
        'space-around': {
          justifyContent: 'space-around',
        },
        'space-evenly': {
          justifyContent: 'space-evenly',
        },
      },
      gap: {
        xs: {
          columnGap: 5,
        },
        sm: {
          columnGap: 10,
        },
        md: {
          columnGap: 15,
        },
        lg: {
          columnGap: 20,
        },
        xl: {
          columnGap: 25,
        },
      },
    },
  },
});
