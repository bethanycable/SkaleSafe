import React from 'react';

const Home = () => {
  return (
    <div
      id="home"
      className="h-[42rem] ml:h-[48rem] pt-6 ml:py-0 w-screen bg-gradient-to-tr from-teal-blue flex flex-col items-center justify-evenly"
    >
      <h1
        className="text-5xl ml:text-4xl text-center text-primary-color leading-snug ml:leading-relaxed tracking-wide"
      >
        Kubernetes
        <br />
        Auto-Scaling
        <br />
        <span
          className="font-semibold text-5xl ml:text-4xl text-honeydew underline underline-offset-4"
        >
          Demystified
        </span>
      </h1>
      <img
        className="order-first w-4/5 ml:w-2/5 max-w-lg"
        src="/SkaleSafecolor.svg"
        alt="A fish inside a shield. SkaleSafe"
      />
    </div>
  );
}

export default Home;
