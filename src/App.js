import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
        name: "portfolio",
        description: "A short, but sweet, example of some of my previous projects"
    },
    {
        name: "resume",
        description: "My resume along with other proficiencies."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
          {!contactSelected ? (
            <>
              <About></About>
              <Portfolio currentCategory={currentCategory}></Portfolio>
            </>
          ) : (
              <ContactForm></ContactForm>
          )};
      </main>
    </div>
  );
}


export default App;