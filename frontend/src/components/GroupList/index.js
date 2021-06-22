import React, {useState, useEffect} from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {listGroups} from "../../store/group"
import "./GroupList.css";

function GroupList(title) {

  const sessionUser = useSelector((state) => state.session.user);
  const sessionGroup = useSelector((state) => state.group)
  const dispatch = useDispatch()
  const [groups, setGroups] = useState()

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa", sessionGroup)

  useEffect(() => {
    // dispatch(setGroups(sessionGroup[sessionUser.id]))


  }, [dispatch])



  return (
    <div className="groupBubble">
      <h1>{title.title}</h1>
      {/* <div>
        {
          groups.map((group) => (
            <div>{group.id}</div>
          ))
      }
      </div> */}
    </div>
  );
}

export default GroupList;
