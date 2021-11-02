import React from 'react';
import style from './Home.module.css';
import Box from '../Box/Box';

const Home = (data) => {
  return (
    <div className={style.container}>
      <div>
        <Box title='rotation time' data={data.planetData.rotation} />
        <Box title='revolution time' data={data.planetData.revolution} />
        <Box title='radius' data={data.planetData.radius} />
        <Box title='average temp' data={data.planetData.temperature} />
      </div>
    </div>
  );
};

export default Home;
