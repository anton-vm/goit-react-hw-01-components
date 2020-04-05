import React from 'react';
// import PropTypes from 'prop-types'
import FriendCard from './FriendCard'
import friends from './Friends.json'
import classes from './Friends.module.css'

const FriendList = () => {
    console.log(friends);
    return (
        <ul className={classes.list}>
           {friends.map(el => 
            <FriendCard 
            key={el.id}
            avatar={el.avatar}
            name = {el.name}
            isOn = {el.isOnline}
            />
            )
             }
               
        </ul>
    );
   


};

export default FriendList;