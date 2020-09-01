import React from "react";
import "./portfolio-nav.scss";
export const PortfolioNav = () => {
  const handleFilter = (e) => {
    console.log(e);
  };
  return (
    <div className="portfolio-nav">
      <span className="link active" onClick={handleFilter.bind(this, "ALL")}>
        All
      </span>
      <span className="link" onClick={handleFilter.bind(this, "ARCHITECTURE")}>
        ARCHITECTURE
      </span>
      <span className="link" onClick={handleFilter.bind(this, "ARTS")}>
        ARTS
      </span>
      <span className="link" onClick={handleFilter.bind(this, "BRUSHES")}>
        BRUSHES
      </span>
      <span className="link" onClick={handleFilter.bind(this, "CRAFTS")}>
        CRAFTS
      </span>
      <span className="link" onClick={handleFilter.bind(this, "ILUSTRATIONS")}>
        ILUSTRATIONS
      </span>
      <span className="link" onClick={handleFilter.bind(this, "WALLPAPERS")}>
        WALLPAPERS
      </span>
    </div>
  );
};
