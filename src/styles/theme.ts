import { breakpoints } from '@src/styles/breakpoints';
import { lightTheme } from '@src/styles/light';
import { UnistylesRegistry } from 'react-native-unistyles';
import { darkTheme } from '@src/styles/dark';

export type AppBreakpoints = typeof breakpoints;

export interface AppThemes {
  light: typeof lightTheme;
  dark: typeof lightTheme;
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({ light: lightTheme, dark: darkTheme })
  .addConfig({ adaptiveThemes: true, initialTheme: 'light' });
