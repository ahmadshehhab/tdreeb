import React, { useState } from 'react'
import mInsta from "../Assets/Frame 5.png"
import mInsta2 from "../Assets/Group 13.png"
import insta from "../Assets/insta.svg"
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()
  const login = async() => {

   try {
    await axios.post("http://16.170.173.197/users/login" ,{
    
      email: Email,
      password: Password
  }).then(res => {
    console.log(res.data.token)
    localStorage.setItem("token" , res.data.token)
    localStorage.setItem("userId" , res.data.user.id)
    navigate('/home')
  })
   } catch (error) {
    console.log(error)
   }
    
    
  
  }
  return (
    <>
    <div className="signUpContainer">
     <div className="innerSignUpContainer">
       <div className="leftSignUp">
         <img className='signImage1' src={mInsta} alt="" />
         <img className='signImage2' src={mInsta2} alt="" />
       </div>
       <div className="rightSignUp">
         <div className="signUpFormContainer">
           <div className="signFormLabel">
             <img src={insta} alt="" srcset="" />
           </div>
           <input type="text" name="" id=""  placeholder='Mobile Number or Email' onChange={e => setEmail(e.target.value)}/>
           <input type="password" placeholder='Password' name="" id="" onChange={e => setPassword(e.target.value)} />
           <button onClick={login}>Login</button>
           <div className="signRow rows">
             <div className="or">Or</div>
           </div>
           <button className="facebookLogin">Login with Facebook</button>
           <div className="forget">Forget password?</div>
         </div>
         <div className="dontHaveAccount">Don't have an account?  <span style={{marginLeft:"10px" , color:"#0095F6"}}> Sign Up</span></div>
       </div>
     </div>
    </div>
    </>
  )
}

export default Login