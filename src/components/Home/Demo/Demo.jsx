import React from 'react';

const Demo = () => {
  return (
    <div
      id="demo"
      className="h-[24rem] ml:h-[42rem] w-screen flex flex-col items-center justify-center"
    >
      <h1 className="app__titles mb-6 ml:mt-6 ml:mb-10">DEMO</h1>
      <iframe
        className="w-5/6 h-2/3 md:w-3/5 ml:w-[750px] ml:h-[422px]"
        src="https://www.youtube.com/embed/8zvLTEEqlmg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Demo;
