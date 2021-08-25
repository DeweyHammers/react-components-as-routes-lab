import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={Math.random()}>
            <h2>{director.name}</h2>
            <p>Movies:</p>
            <ul>
              {director.movies.map(moive => {
                return <li key={Math.random()}>{moive}</li> 
              })}
            </ul>
          </div>
        )})}
    </div>
  );
}

export default Directors
