import React from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_img">
        <img
          src="https://images.livemint.com/img/2022/09/13/1600x900/Virat_Kohli_1663054501566_1663054501841_1663054501841.jpg"
          alt="virat"
        />
      </div>
      <div className="profile_detail">
        <div className="profile_top">
          <div className="name">
            <p>virat.kohli</p>
            <img
              src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ="
              alt="blue"
            />
          </div>
          <div className="insta_profile_btn">
            <button>Follow</button>
            <button className="btn">Message</button>
            <button className="btn icon">
              <BiUserPlus />
            </button>
            <div className="more_icon">
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
        <div className="profile__stats">
          <div className="posts">
            <p className="number">1000</p>
            <p>posts</p>
          </div>
          <div className="posts">
            <p className="number">230M</p>
            <p>followers</p>
          </div>
          <div className="posts">
            <p className="number">262</p>
            <p>following</p>
          </div>
        </div>
        <div className="profile_owns">
          <p style={{ fontWeight: 'bold' }}>Virat Kohli</p>
          <p>Profile Description!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
