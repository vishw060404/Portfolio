import {Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import Home from './Home'

import Certificates from './Certificates'
import Projects from './Projects'
import Missing from './Missing'
import useWindowSize from './WindowSize'
import { GiHamburgerMenu } from "react-icons/gi";
import './Mobile.css';

function App() {
  const location = useLocation()
  const {width} = useWindowSize();
   if(location.pathname == '/' && width <700){
      document.getElementById('navBar').style.width = '70%';
     }
     else{
      document.getElementById('navBar').style.width = '100%';

     }
  const moreOptions = ()=>{
     const nav=document.querySelector('#slideNav');
     nav.style.right = '150px'
    
    }
    const close=()=>{
     document.querySelector('#slideNav').style.right = '-999px';


    }
  
  return (
    <div>
      
        <section id='navBar'>
          <h2>Portfolio</h2>
          <div>
            {width > 600 ?
            
            <nav>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/certificates'}>Certificates</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><a href='https://drive.google.com/file/d/1OCQ34b2wP8XnW1yVtEf6hutlRxP56JLQ/view?usp=drivesdk'>Resume</a></li>

              </ul>
            </nav>
            : <button className='more' onClick={()=> moreOptions()}><GiHamburgerMenu /></button>}
            <nav id='slideNav'>
              <ul>
                <li onClick={()=>close()}>X</li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/certificates'}>Certificates</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><a href='https://drive.google.com/file/d/1OCQ34b2wP8XnW1yVtEf6hutlRxP56JLQ/view?usp=drivesdk'>Resume</a></li>

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
  )

}
export default App
