import React, {useState, useEffect} from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {listGroups} from "../../store/group"
import "./GroupList.css";

function GroupList(title) {

  const sessionUser = useSelector((state) => state.session.user);
  const sessionGroup = useSelector((state) => state.group)
  const dispatch = useDispatch()
  const [allGroups, setAllGroups] = useState()

  useEffect(() => {
    yourGroups()
    // console.log(sessionGroup)
  }, [])

  const yourGroups = async () => {
    let groups = await dispatch(listGroups())
    setAllGroups(groups.list)
  }

  // yourGroups()



  // allGroups.map((group)=>{console.log(group)})

  console.log("sessionGroup:", sessionGroup, "sessionUser:", sessionUser, "yourGroups:", allGroups)



  return (
    <div className="groupBubble">
      <h1>{title.title}</h1>
      <div>
        {
          allGroups.map((group) => (
            <div key={group.id}>{group.id}</div>
          ))
      }
      </div>
    </div>
  );
}

export default GroupList;
