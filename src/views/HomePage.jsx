import React, { useState } from 'react'
import Card from '../components/Card';

const HomePage = () => {
    const [Num, setNum] = useState(100);
  return (
    <>
    <div className="nav">
        <div className="title">Gaza Sky Geeks</div>
    </div>
    <div className="container">
    
    <div className="CardsContainer">

    {[...Array(Num)].map(() => (
        
        <Card/>
        ))
    }
    </div>
    <div className="ButtonsBox">
        <div className="innerBContainer">

    {[...Array(13)].map(() => (
        
        <div className="Button">Tag Button</div>
        ))
    }
    </div>
    </div>
    </div>
    </>
  )
}

export default HomePage