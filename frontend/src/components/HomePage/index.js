import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import TestSection from "../TestSection";
import "./HomePage.css";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/login" />
  }

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
