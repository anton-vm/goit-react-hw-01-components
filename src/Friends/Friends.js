import React from "react";
// import friends from './Friends.json'
import FriendsList from "./FriendList";

const Friends = ({ friends }) => {
  return <FriendsList friends={friends}></FriendsList>;
};

export default Friends;
