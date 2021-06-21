import React from "react";
import { NavLink } from "react-router-dom";

import TestSection from "../TestSection";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <h1>Welcome to Teeup</h1>
      <div>this is a div</div>
      <div className="flexTest">
        <TestSection />
        <TestSection />
      </div>
    </>
  );
}

export default HomePage;
