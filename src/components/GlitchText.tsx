import type { ReactNode } from 'react';

export function GlitchText({ children }: { children: ReactNode }) {
  return (
    <span className="glitch-text" data-text={typeof children === 'string' ? children : undefined}>
      {children}
    </span>
  );
}
