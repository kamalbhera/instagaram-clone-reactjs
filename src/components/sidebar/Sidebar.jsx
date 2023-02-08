import React from 'react'
import './sidebar.css'
import sidebarData from '../data/sidebarData'
import SidebarMenu from './SidebarMenu'
import { AiOutlineMenu } from 'react-icons/ai'

const Sidebar = ({ navbar, setNavbar }) => {
  return (
    <div className='sidebar_container'>
      <div className='sidebar_header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'
          alt='Instagram'
        />
      </div>
      <div className='sidebar_navigation'>
        {sidebarData.map((menu, i) => (
          <SidebarMenu
            navbar={navbar}
            setNavbar={setNavbar}
            key={menu.id}
            title={menu.title}
            Icon={menu.icon}
          />
        ))}
      </div>
      <div className='sidebar_menu_btn'>
        <SidebarMenu title='Menu' Icon={AiOutlineMenu} />
      </div>
    </div>
  )
}

export default Sidebar
