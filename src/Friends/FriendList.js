import React from "react";
import FriendCard from "./FriendCard";
import classes from "./Friends.module.css";
// import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.list}>
      {friends.map((el) => (
        <FriendCard
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOn={el.isOnline}
        />
      ))}
    </ul>
  );
  // FriendList.propTypes = {
  //   friends: PropTypes.object,
  // }

};

export default FriendList;
