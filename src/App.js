import { Route, Routes } from 'react-router';

import './App.css';
import Home from './views/Home';
import Explore from './views/Explore';
import { Link } from 'react-router-dom';
import Profile from './views/Profile';
import Messages from './views/Messages';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
    <div className="App">
    </div>
    
        <Routes>

            <Route  path="*" element={<NotFound/>} />
            <Route  path="/home" element={<Home/>} />
            <Route exact path="/explore" element={<Explore/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/messages" element={<Messages/>} />
          </Routes>
    
    
    </>
  );
}

export default App;
