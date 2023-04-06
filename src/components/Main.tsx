import type { ReactNode } from 'react';

import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/Hero';
import { VerticalFeatures } from '@/components/VerticalFeatures';

type IMainProps = {
  meta: ReactNode;
  // children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="text-gray-600 antialiased">
    {props.meta}
    <Hero />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Main };
