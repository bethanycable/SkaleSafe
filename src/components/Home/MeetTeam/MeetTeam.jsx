import './MeetTeam.css';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import React from 'react';
import Team from './Contact';

const MeetTeam = () => {
  const developer =
    'ml:flex-col ml:justify-between ml:h-4/5 ml:w-1/5 lg:w-120 ml:py-10';
  const links =
    'cursor-pointer bg-grey rounded-full p-2 shadow shadow-honeydew hover:scale-110 hover:bg-sapphire-blue hover:shadow-md hover:shadow-prussian-blue';
  const svg = 'fill-honeydew';

  return (
    <div
      id="team"
      className=" ml:h-[50rem] w-screen p-10 ml:px-20 ml:pt-10 bg-gradient-to-b from-teal-blue flex flex-col items-center justify-center"
    >
      <h1 className="app__titles mb-6 ml:mt-18">Meet The Team</h1>

      <div className="team__cards-container h-11/12 w-full">
        {Team.map((member) => (
          <div className="team__cards h-56 w-40 md:h-72 md:w-44 bg-gradient-to-tr from-primary-color/30 to-light-blue/30">
            <h2 className="md:text-lg ml:text-2xl font-bold text-center break-words">
              {member.name}
            </h2>
            <img
              className="team__cards-img ml:basis-0 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 ml:w-30 ml:h-30 ml:static ml:top-0"
              src={member.image}
              alt={member.alt}
            />
            <p className="hidden ml:block w-4/5 lg:w-40 text-center">
              {member.bio}
            </p>
            <div className="team__cards-media ml:static ml:right-0 ml:bottom-0 ml:gap-8">
              <a
                className={links}
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={26} className={svg} />
              </a>
              <a
                className={links}
                href={member.github}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={26} className={svg} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
