import React from 'react';

const Home = () => {
  return (
    <div
      id="home"
      className="h-[42rem] pt-6 md:pt-8 ml:py-0 w-screen bg-gradient-to-tr from-teal-blue flex flex-col ml:flex-row items-center justify-evenly"
    >
      <h1 className="text-4xl ml:text-5xl text-center text-primary-color leading-snug ml:leading-relaxed tracking-wide">
        Kubernetes
        <br />
        Auto-Scaling
        <br />
        <span className="font-semibold text-4xl ml:text-5xl text-honeydew underline underline-offset-4">
          Demystified
        </span>
      </h1>
      <img
        className="order-first ml:order-none w-4/5 ml:w-2/5 max-w-lg"
        src="/SkaleSafecolor.svg"
        alt="A fish inside a shield. SkaleSafe"
      />
    </div>
  );
};

export default Home;
