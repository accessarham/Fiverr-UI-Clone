import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/categories/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="gigs-container">
        <span className="gigs-breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI Artists
        </p>
        <div className="gigs-menu">
          <div className="gigs-menu-left">
            <span>Budget</span>
            <input type="text" placeholder="Minimum" />
            <input type="text" placeholder="Maximum" />
            <button>Apply</button>
          </div>
          <div className="gigs-menu-right">
            <span className="gigs-menu-right-sortBy">Sort By</span>
            <span className="gigs-menu-right-sortType">
              {sort === "sales" ? "Best Sellers" : "Newest"}
            </span>
            <img
              src="./assets/down.png"
              alt="icon"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="gigs-menu-rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Sellers</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="gig-card">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
