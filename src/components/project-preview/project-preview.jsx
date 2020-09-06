import React from "react";
import "./project-preview.scss";
const ProjectPreview = ({
  data: { id, name, tumblnail, imageUrl, category, shortDescription },
}) => {
  return (
    <div className="project-preview">
      <div className="pro">
        <img src={"" || tumblnail} alt={"" || shortDescription} />
        <div className="footer-text">
          <h4>{"" || name}</h4>
          <p>{"" || shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
