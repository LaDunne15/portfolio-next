import { useBreakpoint } from '@/providers/BreakpointProvider';

type BreakpointValues<T> = {
  base: T;
  md?: T;
  lg?: T;
};

export function useBreakpointValue<T>(values: BreakpointValues<T>): T {
  const { isTablet, isDesktop } = useBreakpoint();

  if (isDesktop && values.lg !== undefined) return values.lg;
  if (isTablet && values.md !== undefined) return values.md;
  return values.base;
}
