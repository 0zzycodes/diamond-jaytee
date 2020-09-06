import React from "react";
import "./project-preview.scss";
const ProjectPreview = ({ data: { name, tumbnail, short_description } }) => {
  return (
    <div className="project-preview">
      <div className="pro">
        <img src={"" || tumbnail} alt={"" || short_description} />
        <div className="footer-text">
          <h4>{"" || name}</h4>
          <p>{"" || short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
