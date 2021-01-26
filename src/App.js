import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-container">

        <h1>App</h1>
        <Link to='/'>Home</Link>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/rick'>Gifs de rick</Link>
        <Link to='/gif/morty'>Gifs de morty</Link>
        <Link to='/gif/dogs'>Gifs de dogs</Link>

        <Route 
          component={ListOfGifs} 
          path='/gif/:keyword' 
        />
      </section>
    </div>
  );
}

export default App;
