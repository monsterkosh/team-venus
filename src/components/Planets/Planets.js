import React from 'react';

const Planets = (data) => {
  console.log(data);
  return (
    <div>
      <h1>planets component</h1>
      <p>{data.planetData.name}</p>
    </div>
  );
};

export default Planets;
