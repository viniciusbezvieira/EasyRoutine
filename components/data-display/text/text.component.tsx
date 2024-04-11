import { classMerge } from 'app/utils/class-merge.utils';
import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { TextProps as TextNativeProps } from 'react-native';

import Styles from './text.styles';
import { TextProps } from './text.types';

const StyledText = styled(Text);

const TextComponent = React.forwardRef<TextNativeProps, TextProps>(
  (props, ref) => {
    const { children, textClassName, size, fontWeight, ...rest } = props;

    const styles = React.useMemo(
      () => Styles.textStyles({ size, fontWeight }),
      [size, fontWeight],
    );

    return (
      <StyledText
        {...rest}
        ref={ref}
        className={classMerge(textClassName, styles)}
      >
        {children}
      </StyledText>
    );
  },
);

export default TextComponent;
