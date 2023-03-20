/* eslint-disable max-len */
import React from 'react';

const Features = () => {
  const features__items_start =
    'flex flex-col items-center justify-center text-justify ml:flex ml:flex-row ml:self-start gap-y-4 ml:gap-y-8';
  const features__items_end =
    'flex flex-col items-center justify-center text-justify ml:flex ml:flex-row ml:self-end gap-y-4 ml:gap-y-8';
  const features__videos = 'order-first w-5/6 ml:w-2/3 max-w-lg';
  return (
    <div
      id="features"
      className="w-screen flex flex-col items-center jusitfy-center py-10 ml:py-20 bg-gradient-to-tl from-teal-blue"
    >
      <h1 className="app__titles ml:mt-5 mb-10 ml:mb-20">Features</h1>
      <div className="flex flex-col items-center gap-4 ml:gap-6 gap-y-12 ml:gap-y-20 text-md lg:text-xl mx-6 ml:mx-20">
        <div className={features__items_start}>
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/login-and-scale-metrics.mp4" type="video/mp4" />
          </video>
          <p className="ml:ml-52">
            The Scaling Metrics tab serves a battery of graphs and data points
            derived from autoscaling metrics, providing incisive insight into
            the performance of a cluster’s autoscaling architecture, both in its
            current state and over time.
          </p>
        </div>
        <div className={features__items_start}>
          <p className="ml:ml-52">
            The Cluster Health tab visualizes an assortment of broader metrics
            which together paint a picture of the cluster’s overall performance.
          </p>
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/cluster-health-metrics.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={features__items_start}>
          <video autoPlay loop muted className={features__videos}>
            <track default kind="captions" srcLang="en" />
            <source src="/kubeview.mp4" type="video/mp4" />
          </video>
          <p className="ml:ml-52">
            The KubeView tab provides the user with an interactive visual
            overview of all Kubernetes Objects currently deployed across
            namespaces, showing their respective relationships to one another.
          </p>
        </div>
        <div className={features__items_start}>
          <p className="ml:ml-52">
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
