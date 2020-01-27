import React from 'react';
import './App.css';
import MovieList from './Movie/MovieListe'
import Modales from './Modal/Modal';
import Serchname from './search/Serchname'
// import {Modal} from 'react-bootstrap'

function Home() {
  return (
    <div className="App">
      <Serchname/>
      <MovieList />
      <Modales/>
    </div>
  );
}

export default Home ;
