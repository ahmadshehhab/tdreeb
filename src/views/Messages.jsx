import React from 'react'
import NavBar from '../components/NavBar'
import Me from "../Assets/IMG-20221215-WA0004.jpg";
import newMessage from "../Assets/NewMessages.png"
import Arrow from "../Assets/Arrow.png"
import ma from "../Assets/messengar-logo 1.png"
const Messages = () => {
  return (
    <>
    <NavBar/>
    <div className="Messages">
      <div className="MessagesHeader">
      <div className="MessageHeaderLeft">
          <div className="MessagesHeaderName">AhmedShehab</div>
          <img src={Arrow} alt="" />
        </div>
        <div className="MessageHeaderRight">
          <img src={newMessage} alt="" />
        </div>
      </div>
      <div className="row"></div>
      <div className="label1">Messages <span className='spnR'>Request</span></div>
      {[...Array(4)].map(() => (

        <div className="MessagesItem">
        <div className="MessageLeft">
          <img src={Me} alt="" />
        </div>
        <div className="MessageRight">
          <div className="MessageName">Ahmad Shehab</div>
          <div className="MessageMessage spnR" >احلا شباب <span>.2s<div className='not'> </div></span></div>
        </div>
      </div>
        ))}
    </div>
    <div className="MessagesArea">
      <div className="mAreaContainer">
        <img src={ma} alt="" srcset="" />
        <div className="t1">Your Messages</div>
        <div className="t2 spnR">Send private photos and messages to friend or group</div>
        <div className="Mbtn">SEND MESSAGE</div>
      </div>
    </div>
    </>
  )
}

export default Messages