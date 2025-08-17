import './Mobile.css'

function Technologies() {
  return (
    <div>
      <section id='Technology'>
        <h2>Technologies</h2>
        <div className='techList'>
          <div className='techItem'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML5' />
            <div className='techText'>
                <h3>HTML5</h3>
                <p>I use HTML5 to create the structure and content of web pages.
                    It provides semantic elements that improve accessibility and SEO.
                    With HTML5, I build clean, well-organized layouts for modern websites.</p>
            </div>
          </div>
          <div className='techItem'>
            <div className='techText'>
                <h3>CSS3</h3>
                <p>CSS3 helps me design beautiful and responsive user interfaces.
                    I style elements with colors, layouts, animations, and transitions.
                    Using Flexbox and Grid, I ensure mobile-first, adaptive designs.</p>
            </div>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='CSS3' />
            
          </div>
          <div className='techItem'>
            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='JavaScript' />
            <div className='techText'>
                <h3>JavaScript</h3>
                <p>JavaScript allows me to add dynamic behavior and logic to web apps.
                    I use it for DOM manipulation, API calls, and form validations.
                    It’s the core scripting language that powers interactive features.</p>
            </div>
          </div>
          <div className='techItem'>
            <div className='techText'>
                <h3>React</h3>
                <p>React lets me build fast, modular, and reusable UI components.
                    I manage state and props effectively to create dynamic interfaces.
                    Using React Router and hooks, I develop scalable single-page apps.</p>
            </div>

            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technologies
