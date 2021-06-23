import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups } from "../../store/group";
import "./EventGroupList.css";

function EventGroupList(title) {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionGroup = useSelector((state) => state.group);
  const dispatch = useDispatch();
  const [allGroups, setAllGroups] = useState();
  let yourGroups = [];

  useEffect(() => {
    getAllGroups();
  }, []);

  const getAllGroups = async () => {
    let groups = await dispatch(listGroups());
    setAllGroups(groups.list);
  };

  const findYourGroups = () => {
    allGroups.map((group) => {
      if (group.hostId === sessionUser.id) yourGroups.push(group);
    });
    return yourGroups;
  };
  if (allGroups) {
    findYourGroups();
  }

  return (
    <div className="groupBubble">
      <h1>{title.title}</h1>
      {/* <div>
        {!allGroups ? (
          <div key="0">There are 0 groups!</div>
        ) : (
          yourGroups.map((group) => (
            <div key={group.id}>{group.Group.name}</div>
          ))
        )}
      </div> */}
    </div>
  );
}

export default EventGroupList;
