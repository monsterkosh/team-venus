import React from 'react';
import Box from '../Box/Box';

const Planets = (data) => {
  // console.log(data);
  console.log(data.planetData.rotation)
  return (
    <div>
      <h1>planets component</h1>
      <p>{data.planetData.name}</p>
      <div>
        <Box title="rotation time" data={data.planetData.rotation} />
        <Box title="revolution time" data={data.planetData.revolution} />
        <Box title="radius" data={data.planetData.radius} />
        <Box title="average temp" data={data.planetData.temperature} />
      </div>
    </div>
  );
};

export default Planets;
