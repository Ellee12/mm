import type { ReactNode } from 'react';
import React from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const TopSection = (props: ISectionProps) => (
  <div className={`mx-auto px-3 ${props.yPadding ? props.yPadding : 'py-12'}`}>
    {props.children}
  </div>
);

export { TopSection };
