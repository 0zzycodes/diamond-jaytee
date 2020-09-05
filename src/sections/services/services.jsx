import React from "react";
import ServicePreview from "../../components/service-preview/service-preview";
import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <h1>SERVICES</h1>
        <span>THESE ARE WHAT I CAN DO FOR YOU</span>
        <div className="service-list">
          <ServicePreview
            data={{
              title: "Digital Art",
              body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
          nisi sit, fugiat est suscipit rem enim eos fugit officia ex ipsum quia
          minima, quod facilis? Odit ducimus quod adipisci aliquid excepturi!`,
            }}
          />
          <ServicePreview
            data={{
              title: "Digital Art",
              body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
          nisi sit, fugiat est suscipit rem enim eos fugit officia ex ipsum quia
          minima, quod facilis? Odit ducimus quod adipisci aliquid excepturi!`,
            }}
          />
          <ServicePreview
            data={{
              title: "Digital Art",
              body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
          nisi sit, fugiat est suscipit rem enim eos fugit officia ex ipsum quia
          minima, quod facilis? Odit ducimus quod adipisci aliquid excepturi!`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
