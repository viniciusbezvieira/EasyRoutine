import { VariantProps } from 'class-variance-authority';
import { TextProps as TextNativeProps } from 'react-native';

import Styles from './text.styles';

export type TextVariants = VariantProps<typeof Styles.textStyles>;
export type TextProps = TextNativeProps &
  TextVariants & {
    textClassName?: string;
  };
