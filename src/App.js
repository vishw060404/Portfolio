import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Certificates from './Certificates'
import Projects from './Projects'
import Missing from './Missing'
import useWindowSize from './WindowSize'
import { GiHamburgerMenu } from "react-icons/gi";
import './Mobile.css';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moreOptions = () => setIsMenuOpen(true);
  const close = () => setIsMenuOpen(false);

  return (
    <div>
      <section 
        id='navBar'
        style={{
          width: (location.pathname === '/' && width < 700) ? '70%' : '100%'
        }}
      >
        <h2>Portfolio</h2>
        <div>
          {width > 600 ? (
            <nav>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/certificates'}>Certificates</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li>
                  <a href='https://drive.google.com/file/d/1OCQ34b2wP8XnW1yVtEf6hutlRxP56JLQ/view?usp=drivesdk'>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <button className='more' onClick={moreOptions}>
              <GiHamburgerMenu />
            </button>
          )}

          <nav 
            id='slideNav' 
            style={{ right: isMenuOpen ? "150px" : "-999px" }}
          >
            <ul>
              <li onClick={close}>X</li>
              <li><Link to={'/'} onClick={close}>Home</Link></li>
              <li><Link to={'/certificates'} onClick={close}>Certificates</Link></li>
              <li><Link to={'/projects'} onClick={close}>Projects</Link></li>
              <li>
                <a 
                  href='https://drive.google.com/file/d/1OCQ34b2wP8XnW1yVtEf6hutlRxP56JLQ/view?usp=drivesdk'
                  onClick={close}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
