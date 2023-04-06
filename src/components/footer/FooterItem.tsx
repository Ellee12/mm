import React from 'react';

type LiItem = {
  content: string;
  href: string;
};

type IFooterItemProps = {
  title: string;
  contents: LiItem[];
};

const FooterItem = (props: IFooterItemProps) => (
  <div className="col-span-2 md:col-span-1 lg:col-auto">
    <h2 className="mb-6 font-bold text-white">{props.title}</h2>
    <ul className="text-sm font-medium">
      {props.contents.map((content, index) => (
        <li className="mb-4 text-white" key={index}>
          <a href={content.href} className="hover:underline text-white" target="_blank">
            {content.content}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export { FooterItem };
