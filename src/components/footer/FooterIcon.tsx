import type { ReactNode } from 'react';
import React from 'react';

type IFooterIconProps = {
  href: string;
  icon: ReactNode;
};

const FooterIcon = (props: IFooterIconProps) => (
  <a href={props.href} target="_blank">
    {props.icon}
  </a>
);

export { FooterIcon };
