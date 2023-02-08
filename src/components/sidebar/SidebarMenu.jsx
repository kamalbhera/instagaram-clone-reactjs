import React from 'react';
import { Link } from 'react-router-dom';



const SidebarMenu = ({navbar,setNavbar,title,Icon}) => {

 
  return (
    <Link className='link' to={`/`} onClick={() =>setNavbar(title)}>
    <div className={`sidebar_menuContainer ${navbar === title ? "selected" : ""}` }>
      <div className='icon'>
      <Icon />
      </div>
      <div className='sidebar__title'>
        <p>{title}</p>
        </div>
    </div>
    </Link>
  )
}

export default SidebarMenu