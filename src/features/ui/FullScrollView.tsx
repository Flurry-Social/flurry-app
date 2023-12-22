import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

export function FullScrollView({
  children,
  contentContainerStyle,
  ...rest
}: ScrollViewProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
