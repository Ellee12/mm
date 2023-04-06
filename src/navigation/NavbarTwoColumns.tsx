import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between ">
    <div>
      <Link href="/">
        <div className="inline-flex items-center">
          <span className="inline-flex items-baseline">
            {props.logo}
            <span className="text-xl text-white	">{'Developers'} </span>
          </span>
        </div>
      </Link>
    </div>

    <nav>
      <ul className="flex items-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
