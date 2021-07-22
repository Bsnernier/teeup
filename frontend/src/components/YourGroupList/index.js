import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGroups, removeFromGroup } from "../../store/group";
import "./YourGroupList.css";

function YourGroupList(title) {
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

  const sendRemoveFromGroup = async (id) => {
    let updatedGroups = await dispatch(removeFromGroup(id));
  };

  const findYourGroups = () => {
    allGroups.map((group) => {
      if (group.userId === sessionUser.id) yourGroups.push(group);
    });
    return yourGroups;
  };
  if (allGroups) {
    findYourGroups();
  }

  const handleClick = (e) => {
    e.preventDefault();
    const newGroupPayload = {};
    // newGroupPayload[e.target.id] = sessionUser.id;
    sendRemoveFromGroup(e.target.id);
  };

  return (
    <div className="groupBubble">
      <h1>{title.title}</h1>
      <div className="groupArranger">
        {!allGroups ? (
          <div key="0">There are 0 groups!</div>
        ) : (
          yourGroups.map((group) => (
            <div>
              <div className="groupName" key={group.id}>
                {group.Group.name}
              </div>
              <button
                onClick={handleClick}
                id={group.id}
                className="leaveButton"
              >
                Leave Group
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default YourGroupList;
