import React from "react";
import { NavLink } from "react-router-dom";

import TestSection from "../TestSection";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="flexTest">
        <TestSection />
        <TestSection />
      </div>
    </>
  );
}

export default HomePage;
