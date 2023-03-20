/* eslint-disable max-len */
import React from 'react';

const About = () => {
  const bulletText = 'text-l ml:text-xl px-4';
  const bulletImg = 'w-6 h-6 ml:w-8 ml:h-8';
  const about__bullets = 'flex items-center';

  return (
    <div
      id="about"
      className=" ml:h-[38rem] w-screen flex flex-col items-center justify-center gap-16 p-8 ml:p-10"
    >
      <h1 className="app__titles">About</h1>
      <div className={about__bullets}>
        <img
          className={bulletImg}
          src="/skaleSafelight.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span className={bulletText}>
          SkaleSafe was created to provide comprehensive insight into the
          auto-scaling behaviors of Kubernetes clusters.
        </span>
      </div>
      <div className={about__bullets}>
        <img
          className={bulletImg}
          src="/skaleSafelight.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span className={bulletText}>
          It incorporates tried and true technologies Prometheus, Grafana and
          Kubeview for interactive, easy-to-use visualizations.
        </span>
      </div>
      <div className={about__bullets}>
        <img
          className={bulletImg}
          src="skaleSafelight.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span className={bulletText}>
          SkaleSafe scrapes detailed cluster metrics and transforms them into a
          powerful suite of elegant and intuitive graphs and displays.
        </span>
      </div>
      <div className={about__bullets}>
        <img
          className={bulletImg}
          src="/skaleSafelight.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span className={bulletText}>
          This application is your one-stop-shop for monitoring the performance
          of your K8s auto-scaling architecture, saving you{' '}
          <span className="font-bold">time</span> and{' '}
          <span className="font-bold">money</span>.
        </span>
      </div>
    </div>
  );
};

export default About;
