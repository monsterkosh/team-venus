import React, { useState } from 'react';
import style from './Home.module.css';
import Box from '../Box/Box';
import arrowImg from '../../assets/arrow.svg';

const Home = (data) => {
  let overview = {
    title: data.planetData.name,
    desc: data.planetData.overview.content,
    wiki: data.planetData.overview.source,
    img: data.planetData.overview.image,
  };

  let structure = {
    title: data.planetData.name,
    desc: data.planetData.structure.content,
    wiki: data.planetData.structure.source,
    img: data.planetData.structure.image,
  };

  let surface = {
    title: data.planetData.name,
    desc: data.planetData.geology.content,
    wiki: data.planetData.geology.source,
    img: data.planetData.geology.image,
    geo: data.planetData.geology.geo,
  };

  const [planetData, setPlanetData] = useState(overview);

  return (
    <div className={style.container}>
      <div className={style.hero}>
        <div className={style.hero_wrapper}>
          <div className={style.hero_views}>
            <button
              onClick={() => {
                setPlanetData(overview);
              }}
            >
              overwiew
            </button>
            <button
              onClick={() => {
                setPlanetData(structure);
              }}
            >
              structure
            </button>
            <button
              onClick={() => {
                setPlanetData(surface);
              }}
            >
              surface
            </button>
          </div>
          <div className={style.hero_left}>
            <div className={style.hero_images}>
              <img src={planetData.img} alt='' />
            </div>
            {planetData.geo ? (
              <div className={style.hero_images__mini}>
                <img src={planetData.geo} alt='' />
              </div>
            ) : (
              false
            )}
          </div>
          <div className={style.hero_right}>
            <div className={style.hero_info}>
              <div className={style.hero_title}>{planetData.title}</div>
              <div className={style.hero_info__desc}>{planetData.desc}</div>
              <div className={style.hero_info__wiki}>
                Source:{' '}
                <a href={planetData.wiki}>
                  Wikipedia
                  <img src={arrowImg} alt='go to link'></img>
                </a>
              </div>
            </div>
            <div className={style.hero_views_desk}>
              <button
                onClick={() => {
                  setPlanetData(overview);
                }}
              >
                overwiew
              </button>
              <button
                onClick={() => {
                  setPlanetData(structure);
                }}
              >
                structure
              </button>
              <button
                onClick={() => {
                  setPlanetData(surface);
                }}
              >
                surface
              </button>
            </div>
          </div>
        </div>
        <div className={style.boxes_container}>
          <Box title='rotation time' data={data.planetData.rotation} />
          <Box title='revolution time' data={data.planetData.revolution} />
          <Box title='radius' data={data.planetData.radius} />
          <Box title='average temp' data={data.planetData.temperature} />
        </div>
      </div>
    </div>
  );
};

export default Home;
