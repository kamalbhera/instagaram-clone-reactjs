import React from 'react';
import './main.css';
import Profile from './Profile';
import ProfileData from './ProfileData';

const Main = () => {
  return (
    <div className="main_container">
      <div className="profile_container">
        <Profile />
        <ProfileData />
      </div>
    </div>
  );
};

export default Main;
