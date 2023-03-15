import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";
import Team from "./Contact";

const MeetTeam = () => {
  const developer = 'flex flex-wrap gap-x-4 ml:flex-col rounded-xl items-center justify-center ml:justify-between h-3/5 w-4/5 ml:h-4/5 ml:w-1/5 lg:w-120 py-2 px-2 ml:py-10 bg-gradient-to-tr from-primary-color/30 to-light-blue/30 border border-teal-blue shadow-lg shadow-current'
  const links = 'cursor-pointer bg-grey rounded-full p-2 shadow shadow-honeydew hover:scale-110 hover:bg-sapphire-blue hover:shadow-md hover:shadow-prussian-blue';
  const svg = 'fill-honeydew';

  return (
    <div id="team" className='h-[60rem] ml:h-[50rem] w-screen px-10 ml:px-20 ml:pt-10 bg-gradient-to-b from-teal-blue flex flex-col items-center justify-center'>
      <h1 className="text-3xl ml:text-4xl text-honeydew font-bold uppercase tracking-wider border-b-4 mb-6 ml:mt-18">Meet The Team</h1>
      <div className="h-11/12 w-full flex flex-col ml:flex-row gap-6 items-center justify-center">
        {Team.map((member) => (
            <div className={developer}>
              <h2 
                className="basis-1/2 ml:basis-0 text-normal ml:text-2xl font-bold text-honeydew tracking-wide text-center break-words m-0"
              >
                {member.name}
              </h2>
              <img 
                className="basis-1/4 ml:basis-0 w-20 h-20 lg:w-32 lg:h-32 ml:w-30 ml:h-30 md:w-28 md:h-28 relative top-5 ml:static ml:top-0 rounded-full border-4 border-honeydew shadow-sm shadow-honeydew" 
                src={member.image} 
                alt={member.alt}
              /> 
              <p className="hidden ml:block text-honeydew w-4/5 lg:w-40 text-center">{member.bio}</p>
              <div className="relative right-12 bottom-3 ml:static ml:right-0 ml:bottom-0 flex flex-row gap-4 ml:gap-8">
                <a className={links} href={member.linkedin} target='_blank' rel='noreferrer'>
                  <AiFillLinkedin size={26} className={svg} />
                </a>
                <a className={links} href={member.github} target='_blank' rel='noreferrer'>
                  <AiFillGithub size={26} className={svg}/>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default MeetTeam;
