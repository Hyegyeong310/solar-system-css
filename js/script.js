const body = document.querySelector('body');

const planetList = [
  {
    name: 'mercury',
    tilt: '0.034',
    day: '1407',
    year: '88',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mercury2.jpg',
    color: '#999999'
  },
  {
    name: 'venus',
    tilt: '177.3',
    day: '5832',
    year: '224.7',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/venus2.jpg',
    color: '#e8cda2'
  },
  {
    name: 'earth',
    tilt: '23.26',
    day: '23.9',
    year: '365.2',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg',
    color: '#b3caff'
  },
  {
    name: 'mars',
    tilt: '25.2',
    day: '24.6',
    year: '687',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mars.jpg',
    color: '#c07158'
  },
  {
    name: 'jupiter',
    tilt: '3.1',
    day: '9.9',
    year: '4331',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/jupiter.jpg',
    color: '#c9b5a4'
  },
  {
    name: 'saturn',
    tilt: '26.7',
    day: '10.7',
    year: '10747',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/saturn.jpg',
    color: '#f0e2c4'
  },
  {
    name: 'uranus',
    tilt: '97.8',
    day: '17.2',
    year: '30589',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/uranus2.jpg',
    color: '#b8d8e1'
  },
  {
    name: 'neptune',
    tilt: '28.3',
    day: '16.1',
    year: '59800',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/neptune.jpg',
    color: '#5e73bb'
  },
  {
    name: 'pluto',
    tilt: '122.5',
    day: '153.3',
    year: '90560',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/pluto.jpg',
    color: '#c3b6aa'
  },
  {
    name: 'sun',
    tilt: '0',
    day: '600',
    year: '0',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/sun.jpg',
    color: '#cc9f4c'
  }
];

function addShadow(color) {
  return `inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2), inset -70px 0px 50px 0px black, -5px 0px 10px -4px ${color}`;
}

function planetSurface(img, tilt, day) {
  const bg = `background-image: url(${img})`;
  const transform = `transform: rotate(${tilt}deg) scale(1.2)`;
  const speed = `animation: planetRotate calc(${day}*0.1s) linear infinite`;
  return `${bg}; ${transform}; ${speed}`;
}

function numberWithCommas(day) {
  return day.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const makePlanets = planetList.map(
  planet => `<article class="card card__${planet.name}">
<div class="card__planet" style="--planet-color-var: ${
    planet.color
  }; --planet-tilt-var: ${planet.tilt}deg" >
  <div class="planet__atmosphere" style="box-shadow:${addShadow(planet.color)}">
    <div class="planet__surface" style="${planetSurface(
      planet.img,
      planet.tilt,
      planet.day
    )}"></div>
  </div>
</div>
<div class="card__info">
  <h2 class="info__title">${planet.name}</h2>
  <div class="info__form">
    <div class="info__item">
      <label class="info__label">Tilt</label><span class="info__line"></span><i class="tilt__icon fas fa-long-arrow-alt-right" style="color:${
        planet.color
      }; transform:rotate(${planet.tilt}deg)"></i><span class="info__detail">${
    planet.tilt
  }°</span>
    </div>
    <div class="info__item">
      <label class="info__label">Day</label><span class="info__line"></span><span class="info__detail">${
        planet.name === 'sun'
          ? `~${numberWithCommas(planet.day)}`
          : `${numberWithCommas(planet.day)}`
      } hours</span>
    </div>
    <div class="info__item">
      <label class="info__label">Year</label><span class="info__line"></span><span class="info__detail">${numberWithCommas(
        planet.year
      )} days</span>
    </div>
  </div>
</div>
</article>`
);

function addPlanet(arr) {
  for (let i = 0; i < arr.length; i++) {
    body.innerHTML += arr[i];
  }
}

function init() {
  addPlanet(makePlanets);
}

init();
