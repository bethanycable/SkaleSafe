import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import React from 'react';

function Footer() {
  const footerIcons = [
    [
      <AiFillGithub size={40} id="gitHubButton" className="fill-honeydew" />,
      'https://github.com/oslabs-beta/SkaleSafe#readme',
    ],
    [
      <AiFillLinkedin
        id="linkedInButton"
        size={40}
        className="fill-honeydew"
      />,
      'https://www.linkedin.com/company/skalesafe',
    ],
  ];

  return (
    <div
      id="footer"
      className="border-t border-honeydew h-20 w-full flex flex-row justify-between items-center pl-4 px-10 ml:px-20"
    >
      <ul className="text-sm">
        <li>@2023 SKALESAFE INC.</li>
        <li>All rights reserved</li>
      </ul>
      <ul className="w-14 flex flex-row justify-between gap-x-2">
        {footerIcons.map(([mediaTag, link]) => (
          <li>
            <a href={link} target="_blank" rel="noreferrer">
              {mediaTag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
