import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export function ViewWithOpacity({ style, children, ...rest }: ViewProps) {
  return (
    <View {...rest} style={[style, styles.container]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});
