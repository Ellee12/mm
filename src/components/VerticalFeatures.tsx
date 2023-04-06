import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/Section';
import image from '@/public/assets/images/icon_main_apis.png';

const VerticalFeatures = () => (
  <Section>
    <div className="flex justify-center py-16">
      <a
        href="/docs"
        className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-md md:flex-row"
      >
        <Image
          className="content-center rounded-t-lg object-cover sm:h-auto sm:w-24 sm:rounded-none sm:rounded-l-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            RESTful API
          </h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {' '}
            Customize integration via the Swit API{' '}
          </p>
          <p className="mb-3 font-semibold text-blue-600 dark:text-gray-400">
            {' '}
            Read docs →{' '}
          </p>
        </div>
      </a>
    </div>
  </Section>
);

export { VerticalFeatures };
