import React from 'react';
import user from './user.json'
import SocialCard from "./SocialCard"
import './Social.css'

const Social = () => {
    console.log(user);
    return (
<SocialCard 
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
    );
};

export default Social;