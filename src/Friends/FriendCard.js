import React from 'react';
import PropTypes from 'prop-types'
import classes from './Friends.module.css'

const FriendCard = ({avatar, name, isOn}) => {
  console.log(isOn);
    return (
<li className={classes.item}>
  {isOn ? (<span className={classes.red}></span>) : (<span className={classes.status}></span>)}
  <img className={classes.avatar} src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li>
    );

    FriendCard.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOn: PropTypes.bool,
    }

};

export default FriendCard;