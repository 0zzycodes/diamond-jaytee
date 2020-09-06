import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PortfolioNav } from "../../components/portfolio-nav/portfolio-nav";
import ProjectPreview from "../../components/project-preview/project-preview";
import { selectAllproject } from "../../redux/project/selectors";
import Spinner from "../../components/spinner/spinner";
import "./portfolio.scss";

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState("ALL");
  const handleFilter = (e) => {
    setFilter(e);
  };
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>PORTFOLIO</h1>
      </div>
      <PortfolioNav data={{ filter, handleFilter }} />
      <div className="project-list"></div>
      {projects.length !== 0 ? (
        <div className="project-list">
          {projects
            .filter((item, index) =>
              filter !== "ALL"
                ? item.category.toLowerCase() === filter.toLowerCase()
                : projects
            )
            .map((item, index) => (
              <ProjectPreview key={index} data={item} />
            ))}
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
