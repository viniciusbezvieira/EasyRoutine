import { cva } from 'class-variance-authority';

const textStyles = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    fontWeight: {
      regular: 'font-regular',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    fontWeight: 'regular',
  },
});

export default {
  textStyles,
};
