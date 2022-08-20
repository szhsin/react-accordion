import { ReactNode, ReactElement, StrictMode } from 'react';
import { render as nonStrictRender, RenderOptions, RenderResult } from '@testing-library/react';

const StrictModeWrapper = ({ children }: { children?: ReactNode }) => (
  <StrictMode>{children}</StrictMode>
);

export { nonStrictRender };

export const render: (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => RenderResult = (ui, options) =>
  nonStrictRender(ui, { wrapper: StrictModeWrapper, ...options });
