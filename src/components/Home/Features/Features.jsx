import './Features.css';

import React from 'react';

const Features = () => {
  const features__videos =
    'order-first ml:order-none w-5/6 ml:w-80 lg:w-[30rem] xl:w-[32rem] max-w-lg';
  return (
    <div
      id="features"
      className="w-screen flex flex-col items-center jusitfy-center py-10 ml:pb-20 bg-gradient-to-tl from-teal-blue"
    >
      <h1 className="app__titles ml:mt-5 mb-10">Features</h1>
      <div className="flex flex-col items-center gap-4 ml:gap-6 gap-y-12 ml:gap-y-20 text-md lg:text-xl mx-6 ml:mx-20">
        <div className="features__items">
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/login-and-scale-metrics.mp4" type="video/mp4" />
          </video>
          <p className="pt-4 ml:pt-0 ml:pl-20 2xl:pl-28">
            The Scaling Metrics tab serves a battery of graphs and data points
            derived from autoscaling metrics, providing incisive insight into
            the performance of a cluster’s autoscaling architecture, both in its
            current state and over time.
          </p>
        </div>
        <div className="features__items">
          <p className="pt-4 ml:pt-0 ml:pr-20 2xl:pr-28">
            The Cluster Health tab visualizes an assortment of broader metrics
            which together paint a picture of the cluster’s overall performance.
          </p>
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/cluster-health-metrics.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="features__items">
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/kubeview.mp4" type="video/mp4" />
          </video>
          <p className="pt-4 ml:pt-0 ml:pl-20 2xl:pl-28">
            The KubeView tab provides the user with an interactive visual
            overview of all Kubernetes Objects currently deployed across
            namespaces, showing their respective relationships to one another.
          </p>
        </div>
        <div className="features__items">
          <p className="pt-4 ml:pt-0 ml:pr-20 2xl:pr-28">
            The Alerts tab tracks activity regarding Prometheus alerts that have
            been configured for this cluster.
          </p>
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/alertmetrics.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Features;
