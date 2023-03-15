import React from 'react';

const Demo = () => {
  return (
    <div
      id="demo"
      className="h-[24rem] ml:h-[42rem] w-screen flex flex-col items-center justify-center"
    >
      <h1
        className="text-3xl text-honeydew font-bold ml:mt-6 mb-10 tracking-wider border-b-4"
      >
        DEMO
      </h1>
      <iframe
        className='w-5/6 h-3/5 ml:w-[750px] ml:h-[422px]'
        src="https://www.youtube.com/embed/8zvLTEEqlmg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default Demo;
