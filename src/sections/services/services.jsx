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
          <ServicePreview />
          <ServicePreview />
          <ServicePreview />
        </div>
      </div>
    </div>
  );
};

export default Services;
