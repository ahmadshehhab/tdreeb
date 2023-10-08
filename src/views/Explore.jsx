import React from "react";
import NavBar from "../components/NavBar";
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
import Img12 from "../Assets/Explore/Icons/Carousel.png"
import Img13 from "../Assets/Explore/Icons/whitereels.png"
let a = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11 ,Img14]
const About = () => {
  return (
    <>
      <NavBar />
      <div className="picts">
        <div className="picItem">
          {a.map((e) => (
            <>
            <div className="ExploreItem">

              <img src={e} alt="" srcset="" />
              <div className="icon">
                <img src={Img12} alt="" />
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
