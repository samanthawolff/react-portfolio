import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';


function App() {
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
      ></Nav>
      <main>
          <About></About>
          <Portfolio currentCategory={currentCategory}></Portfolio>
      </main>
    </div>
  );
}


export default App;