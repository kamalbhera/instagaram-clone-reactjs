import React from 'react';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';

const Home = ({navbar,setNavbar}) => {
  return (
    <>
      <Sidebar navbar={navbar} setNavbar={setNavbar} />
      <Main />
    </>
  );
};

export default Home;
