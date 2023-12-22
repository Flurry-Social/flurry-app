import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/native';

export const useNav = <P extends ParamListBase, S = keyof P>() =>
  useNavigation<NativeStackNavigationProp<P, S>>();
