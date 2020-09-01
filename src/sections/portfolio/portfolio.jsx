import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PortfolioNav } from "../../components/portfolio-nav/portfolio-nav";
import ProjectPreview from "../../components/project-preview/project-preview";
import "./portfolio.scss";
import { selectAllproject } from "../../redux/project/selectors";
import Spinner from "../../components/spinner/spinner";
const Portfolio = ({ projects }) => {
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>PORTFOLIO</h1>
      </div>
      <PortfolioNav />
      {projects.length !== 0 ? (
        <div className="project-list">
          {projects.map((item, index) => (
            <ProjectPreview key={index} data={item} />
          ))}
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
          <ProjectPreview />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectAllproject,
});

export default connect(mapStateToProps)(Portfolio);
