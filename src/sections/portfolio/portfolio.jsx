import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PortfolioNav } from "../../components/portfolio-nav/portfolio-nav";
import ProjectPreview from "../../components/project-preview/project-preview";
import "./portfolio.scss";
import { selectAllproject } from "../../redux/project/selectors";
import Spinner from "../../components/spinner/spinner";
const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState("ALL");
  const handleFilter = (e) => {
    setFilter(e);
  };
  // const projectData = {
  //   id: String,
  //   name: String,
  //   tumblnail: String, //320 x 380
  //   imageUrl: String,
  //   category: String,
  //   shortDescription: String,
  // };
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>PORTFOLIO</h1>
      </div>
      <PortfolioNav data={{ filter, handleFilter }} />
      <div className="project-list">
        <ProjectPreview data={{}} />
      </div>
      {/* {projects.length !== 0 ? (
        <div className="project-list">
          {projects.filter((item, index) => item.category.toLowerCase() === filter.toLowerCase())map((item, index) => (
            <ProjectPreview key={index} data={item} />
          ))}
        </div>
      ) : (
        <Spinner />
      )} */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectAllproject,
});
// const mapStateToProps = (state) => {
//   console.log(state);
// };

export default connect(mapStateToProps)(Portfolio);
