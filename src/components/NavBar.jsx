import React, { useState } from "react";
import insta from "../Assets/insta.svg";
import HomeIcon from "../Assets/navIcons/Home-fill.png";
import SearchIcon from "../Assets/navIcons/Search.png";
import FindPeopleIcon from "../Assets/navIcons/FindPeople.png";
import ReelsIcon from "../Assets/navIcons/Reels.png";
import MessagesIcon from "../Assets/navIcons/Group 4.png";
import ActivityFeedIcon from "../Assets/navIcons/ActivityFeed.png";
import NewPostsIcon from "../Assets/navIcons/NewPosts.png";
import ResponsiveIcon from "../Assets/navIcons/Component 2.png";
import Me from "../Assets/IMG-20221215-WA0004.jpg";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const NavBar = () => {
  const navigate = useNavigate()
  const createPost = () => {
    document.getElementsByClassName("createPost")[0].classList.add("show");
  };
  const [Image, setImage] = useState();
  const [desc, setdesc] = useState("");
  let data = new FormData();
  data.append("image" , Image)
  data.append("description" , desc)
  const create = async () => {
    try {
      await axios.post("http://16.170.173.197/posts" ,data,{headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`,
      'Content-Type': `multipart/form-data`
    }}).then(res => {
      console.log(res)
      navigate("./")

    })
     } catch (error) {
      console.log(error.message)
     }
  }
  return (
    <>
      <div className="createPost">
        <div className="innercreate">
          <div className="header">create new post</div>
          <div className="rows x row"></div>
          <div className="createBodyContainer">
            <div className="body">
              <div className="createLabel">Description</div>
              <br />
              <textarea
                type="text"
                className="bodyInput"
                onChange={(e) => setdesc(e.target.value)}
              />
            </div>
            <input
              className=" p"
              id="file"
              type="file"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label className="file" for="file">
              Choose File
            </label>
            <button className="Post" onClick={create}>
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div className="innerNavContainer">
          <div className="navLogo">
            <img src={insta} alt="" className="img" />
          </div>
          <div className="navPages">
            <div className="navUp">
              <Link className="NavLinks" to="/home">
                <div className="navItemIcon">
                  <img src={HomeIcon} alt="" srcset="" />
                  <li>Home</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/search">
                <div className="navItemIcon">
                  <img src={SearchIcon} />
                  <li>Search</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/explore">
                <div className="navItemIcon">
                  <img src={FindPeopleIcon} />
                  <li>Explore</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/search">
                <div className="navItemIcon">
                  <img src={ReelsIcon} />
                  <li>Reels</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/messages">
                <div className="navItemIcon">
                  <img src={MessagesIcon} />
                  <li>Messages</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/search">
                <div className="navItemIcon">
                  <img src={ActivityFeedIcon} />
                  <li>Nofifications</li>
                </div>
              </Link>
              <Link className="NavLinks" onClick={createPost}>
                <div className="navItemIcon">
                  <img src={NewPostsIcon} />
                  <li>Create</li>
                </div>
              </Link>
              <Link className="NavLinks" to="/profile">
                <div className="navItemIcon Me">
                  <img src={Me} className="Me" />
                  <li>Ahmad Shehab</li>
                </div>
              </Link>
            </div>
            <div className="navDown">
              <Link className="NavLinks" to="/search">
                <div className="navItemIcon">
                  <img src={ResponsiveIcon} />
                  <li>Menu</li>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
