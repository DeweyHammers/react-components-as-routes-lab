import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return ( 
        <div key={Math.random()}>
          <h2>{actor.name}</h2>
          <p>Movies</p>
          <ul>
            {actor.movies.map(movie => {
              return <li key={Math.random()}>{movie}</li>
            })}
          </ul>
        </div>
      )})}
    </div>
  );
};

export default Actors;
