import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listClubs } from "../../store/clubs";

import "./Clubs.css";

function Clubs() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allClubs, setAllClubs] = useState();

  useEffect(() => {
    getAllClubs();
  }, []);

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const getAllClubs = async () => {
    let clubs = await dispatch(listClubs());
    setAllClubs(clubs.list);
  };

  return (
    <div className="clubBubble">
      <h1>Clubs</h1>
      <div className="clubArranger">
        {!allClubs ? (
          <div key="0">There are 0 clubs!</div>
        ) : (
          allClubs.map((club) => (
            <div className="clubInfo" key={club.id}>
              <NavLink key={club.name} to={`/clubs/${club.id}`}>
                {club.name}
              </NavLink>
              <div>{club.address}</div>
              <div>{club.city}</div>
              <div>{club.state}</div>
              <div>{club.zipCode}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Clubs;
