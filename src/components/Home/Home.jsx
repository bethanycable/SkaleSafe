import React from 'react';

const Home = () => {
  return (
    <div
    id="home"
      className="home__container h-[38rem] ml:h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-col items-center justify-evenly"
    >
      <h1
        className="text-4xl text-center text-primary-color leading-relaxed tracking-wide"
      >
        Kubernetes
        <br />
        Auto-Scaling
        <br />
        <span
          className="font-semibold text-5xl text-honeydew underline underline-offset-4"
        >
          Demystified
        </span>
      </h1>
      <img
        className="order-first w-2/5 max-w-lg"
        src="/SkaleSafecolor.svg"
        alt="A fish inside a shield. SkaleSafe"
      />
    </div>
  );
}

export default Home;
