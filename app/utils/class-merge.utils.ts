import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  prefix: '',
});

export function classMerge(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
