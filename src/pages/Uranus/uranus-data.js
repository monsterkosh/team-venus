import uranusSurface from '../../assets/surface/planet-uranus.svg';
import uranusInternal from '../../assets/internal/planet-uranus-internal.svg';
import uranusGeo from '../../assets/geology/geology-uranus.png';

export const uranusData = {
  name: 'Uranus',
  overview: {
    content:
      'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    source: 'https://en.wikipedia.org/wiki/Uranus',
    image: uranusSurface,
  },
  structure: {
    content:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
    image: uranusInternal,
  },
  geology: {
    content:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
    image: uranusSurface,
    geo: uranusGeo,
  },
  sectionColor: 'hsl(169, 73%, 44%)',
  desktopImgWidth: '458px',
  tabletImgWidth: '290px',
  mobileImgWidth: '176px',
  rotation: '17.2 Hours',
  revolution: '84 Years',
  radius: '25,362 KM',
  temperature: '-195°c',
};
