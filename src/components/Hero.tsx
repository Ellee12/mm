import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { TopSection } from '@/components/layouts/TopSection';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import logo from '@/public/assets/images/logo_white.png';
import main from '@/public/assets/images/main_visual.png';

const Hero = () => (
  <div>
    <div className="hidden bg-black md:block">
      <TopSection yPadding="py-4">
        <NavbarTwoColumns
          logo={
            <Image
              src={logo}
              alt="logo"
              width={65}
              height={20}
              className="mx-1 h-5 self-center"
            />
          }
        >
          <li>
            <Link href="/docs">
              <span className="text-xl text-white	">{'Documentation'} </span>
            </Link>
          </li>
        </NavbarTwoColumns>
      </TopSection>
    </div>

    <div>
      <section
        style={{ backgroundColor: '#F2F2EA' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="container mx-auto text-black xl:px-32">
            <div className="grid items-center justify-center lg:grid-cols-2 lg:gap-6">
              {/* <div className="lg:mb-0 lg:mb-12"> */}
              <div className="lg:mb-12">
                <Image src={main} alt={'main image'} />
              </div>
              {/* <div className="mt-4 lg:mt-0 lg:mt-12 "> */}
              <div className="mt-4 lg:mt-12 ">
                <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                  Build Next for Swit
                </h1>
                <p>
                  The Swit developer platform lets software engineers customize,
                  extend, and integrate with Swit to automate your workflows,
                  build creative bots, productive apps, and internal tools.
                  Let’s create your own Swit apps and get Swit done together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export { Hero };
