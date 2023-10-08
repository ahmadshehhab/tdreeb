import React from "react";
import NavBar from "../components/NavBar";
import Me from "../Assets/IMG-20221215-WA0004.jpg";
import Settings from "../Assets/Profile/Options.svg";
import Save from "../Assets/Profile/Save.png";
import Posts from "../Assets/Profile/Posts.png";
import Tagged from "../Assets/Profile/Tagged.png";
import Post from "../Assets/stories/Rectangle 4.png";
import Img1 from "../Assets/Explore/Rectangle 15-1.png"
import Img2 from "../Assets/Explore/Rectangle 15-2.png"
import Img3 from "../Assets/Explore/Rectangle 15-3.png"
import Img4 from "../Assets/Explore/Rectangle 15-4.png"
import Img5 from "../Assets/Explore/Rectangle 15-5.png"
import Img6 from "../Assets/Explore/Rectangle 15-6.png"
import Img7 from "../Assets/Explore/Rectangle 15-7.png"
import Img8 from "../Assets/Explore/Rectangle 15-8.png"
import Img9 from "../Assets/Explore/Rectangle 15-9.png"
import Img10 from "../Assets/Explore/Rectangle 15-10.png"
import Img11 from "../Assets/Explore/Rectangle 15-1.png"
import Img14 from "../Assets/Explore/Rectangle 20.png"
let a = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11 ,Img14]
const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="ProfileHeader">
        <div className="ProfileHeaderInfo">
          <div className="ProfileHeaderContainer1">
            <div className="ProfilePict">
              <img src={Me} alt="" srcset="" className="Me" />
            </div>
            <div className="phc">
              <div className="ProfileFirstTwoRowContainer">
                <div className="ProfileHeaderRow1">
                  <div className="ProfileName">Ahmad Shehab</div>
                  <div className="btn">Edit Profile</div>
                  <div className="btn">View Actions</div>
                  <img src={Settings} alt="" />
                </div>
                <div className="ProfileHeaderRow2">
                  <div className="posts">9 posts</div>
                  <div className="posts">268 followers</div>
                  <div className="posts">200 following</div>
                </div>
              </div>
            <div className="ProfileHeaderRow3">
              Ahmed Shehab 😉
              <br />
              Full-Stack Web Developer💻
              <br />
              AAUP 🎓
              <br />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileBody">
        <div className="row"></div>
        <div className="categories">
          <div className="categoryContainer">

          <div className="e"><img src={Posts} alt="" srcset="" /> Posts</div>
          <div className="e"><img src={Save} alt="" srcset="" /> REELS</div>
          <div className="e"><img src={Tagged} alt="" srcset="" /> TAGGED</div>
          </div>
        </div>
        <div className="Profilepicts">
          <div className="ProfilepicItem">
            {a.slice(0,5).map((e) => (
              <>
                <img src={e} alt="" srcset="" />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
