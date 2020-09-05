import React from "react";
import "./service-preview.scss";
const ServicePreview = ({ data }) => {
  return (
    <div className="service-preview">
      <div className="pro">
        {/* <img src={} alt=""/> */}
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default ServicePreview;
