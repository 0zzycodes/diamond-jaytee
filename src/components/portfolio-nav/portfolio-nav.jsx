import React from "react";
import "./portfolio-nav.scss";
export const PortfolioNav = ({ data: { filter, handleFilter } }) => {
  return (
    <div className="portfolio-nav">
      <span
        className={`${filter === "ALL" && "active"} link`}
        onClick={handleFilter.bind(this, "ALL")}
      >
        All
      </span>
      <span
        className={`${filter === "ARCHITECTURE" && "active"} link`}
        onClick={handleFilter.bind(this, "ARCHITECTURE")}
      >
        ARCHITECTURE
      </span>
      <span
        className={`${filter === "ARTS" && "active"} link`}
        onClick={handleFilter.bind(this, "ARTS")}
      >
        ARTS
      </span>
      <span
        className={`${filter === "BRUSHES" && "active"} link`}
        onClick={handleFilter.bind(this, "BRUSHES")}
      >
        BRUSHES
      </span>
      <span
        className={`${filter === "CRAFTS" && "active"} link`}
        onClick={handleFilter.bind(this, "CRAFTS")}
      >
        CRAFTS
      </span>
      <span
        className={`${filter === "ILUSTRATIONS" && "active"} link`}
        onClick={handleFilter.bind(this, "ILUSTRATIONS")}
      >
        ILUSTRATIONS
      </span>
      <span
        className={`${filter === "WALLPAPERS" && "active"} link`}
        onClick={handleFilter.bind(this, "WALLPAPERS")}
      >
        WALLPAPERS
      </span>
    </div>
  );
};
