import React from 'react'
import insta from "../Assets/insta.svg"
import HomeIcon from "../Assets/navIcons/Home-fill.png"
import SearchIcon from "../Assets/navIcons/Search.png"
import FindPeopleIcon from "../Assets/navIcons/FindPeople.png"
import ReelsIcon from "../Assets/navIcons/Reels.png"
import MessagesIcon from "../Assets/navIcons/Group 4.png"
import ActivityFeedIcon from "../Assets/navIcons/ActivityFeed.png"
import NewPostsIcon from "../Assets/navIcons/NewPosts.png"
import ResponsiveIcon from "../Assets/navIcons/Component 2.png"
import Me from "../Assets/IMG-20221215-WA0004.jpg"

import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <div className="navContainer">
      <div className="innerNavContainer">

      <div className="navLogo">
          <img src={insta} alt="" className='img'/>

      </div>
      <div className="navPages">
        
          <div className="navUp">

          <Link className='NavLinks'  to='/home'  ><div className="navItemIcon"><img src={HomeIcon} alt="" srcset="" /><li>Home</li></div></Link>
          <Link className='NavLinks'  to='/search'><div className="navItemIcon"><img src={SearchIcon} /><li>Search</li></div></Link>
          <Link className='NavLinks' to='/explore'><div className="navItemIcon"><img src={FindPeopleIcon} /><li>Explore</li></div></Link>
          <Link className='NavLinks' to='/search'><div className="navItemIcon"><img src={ReelsIcon} /><li>Reels</li></div></Link>
          <Link className='NavLinks' to='/messages'><div className="navItemIcon"><img src={MessagesIcon} /><li>Messages</li></div></Link>
          <Link className='NavLinks' to='/search'><div className="navItemIcon"><img src={ActivityFeedIcon} /><li>Nofifications</li></div></Link>
          <Link className='NavLinks' to='/search'><div className="navItemIcon"><img src={NewPostsIcon} /><li>Create</li></div></Link>
          <Link className='NavLinks' to='/profile'><div className="navItemIcon Me"><img src={Me}  className='Me'/><li>Ahmad Shehab</li></div></Link>
          </div>
          <div className="navDown">
          <Link className='NavLinks' to='/search'><div className="navItemIcon"><img src={ResponsiveIcon} /><li>Menu</li></div></Link>

          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default NavBar