import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";

import TestSection from "../TestSection";
import "./HomePage.css";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  let singleGroups = [];
  let yourGroups = [];

  useEffect(() => {
    getAllGroups();
  }, []);

  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  const getAllGroups = async () => {
    let groups = await dispatch(listGroups());
    setAllGroups(groups.list);
  };

  allGroups?.map((group) => {
    if (group.userId === sessionUser.id) yourGroups.push(group.Group.name);
  });

  const findSingleGroups = () => {
    allGroups.map((group) => {
      console.log(group);
      if (
        !singleGroups.includes(group.Group?.name) &&
        !yourGroups.includes(group.Group?.name)
      )
        singleGroups.push(group.Group?.name);
    });
    return singleGroups;
  };
  if (allGroups) {
    findSingleGroups();
  }

  console.log(singleGroups);

  return (
    <>
      <div className="flexTest">
        <div className="homeBubble">
          <h1>Available Groups</h1>
          <div className="homeGroupArranger">
            {!allGroups ? (
              <div key="0">There are 0 groups!</div>
            ) : (
              singleGroups.map((group) => (
                <div>
                  <div className="groupName" key={group?.id}>
                    {group}
                  </div>
                  <button>test</button>
                </div>
              ))
            )}
          </div>
        </div>
        <TestSection />
      </div>
    </>
  );
}

export default HomePage;
