import Header from '../Header';
import MyPhotoProfil from '../../assets/images/photo.jpg';
import Items from '../Items';
import Projects from '../Projects';
import Footer from '../Footer';

import './App.css'

function App() {

  return (
    <>
    <Header />
    <div className='representation'>
      <section className='representation__content'>
        <h1>JUNIOR <br /> FRONT END DEVELOPER</h1>
        <img src={MyPhotoProfil} alt='MyPhotoProfil' />
      </section>
    </div>
    <section className='aboutMe' id='aboutMe'>
      <Items title='about me' variation='items__title'>
        I have always been interested in how sites work, their interactivity, appearance, and how they are generally created and run. 
        I learned CSS and HTML, got a good grasp of JavaScript, and understood responsive approaches to web design and mobile solutions. 
        At the moment I am improving my knowledge in practice,
        I am building projects on React and mastering Redux, I have also taken courses on Udemy and solving problems on Codewars.
      </Items>
      <Items title='EXPERIENCE' variation='items__title'>
          Fulltime education every day (from 9 am till 6 pm) 5 days a week. Self-education with HTML, CSS, JS, React. 
          Main focus on developing and learning through practice. Weekly Q&A calls with Senior developer (mentor)
        </Items>
        <Items title='EDUCATION' variation='items__title'>
          <span>Kryvyi Rih National University</span> <br />
          Organisation management(09/2010-05/2014)
        </Items>
    </section>
    <section className='skills'>
      <Items title='TECH SKILLS' variation='items__title color'>
        HTML, CSS, JavaScript, React, Redux, SASS(SCSS), Git, Gulp, BEM, Figma, 
        Photoshop, Cross- browser and adaptive layout
      </Items>
      <Items title='TRAINING/COURSES' variation='items__title color'>
        Udemy HTML/CSS course, CodeWars, Reactjs.org, React for beginners by Vitaly Ruban and Iter, Rolling scopes school
      </Items>
    </section>
    <Projects />
    <Footer />
    </>
  )
}

export default App
