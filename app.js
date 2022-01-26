const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const heading = document.querySelector('h3');
const backgroundGradient = document.querySelector('#gradient');
const randomBtn = document.querySelector('.btn')

// console.log(randomBtn);

function setBackground(){
  backgroundGradient.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  heading.textContent = backgroundGradient.style.background;
}

color1.addEventListener('input', setBackground); 
color2.addEventListener('input', setBackground); 



function setRandom() {
  const random1 = (Math.floor(Math.random()*255))
  const random2 = (Math.floor(Math.random()*255))
  const random3 = (Math.floor(Math.random()*255))
  const random4 = (Math.floor(Math.random()*255))
  const random5 = (Math.floor(Math.random()*255))
  const random6 = (Math.floor(Math.random()*255))

  const randomColorNumber = backgroundGradient.style.background = `linear-gradient(to right, rgb(${random1}, ${random2}, ${random3}),rgb(${random4}, ${random5}, ${random6}))`

  heading.textContent = randomColorNumber + ';'

//  heading.style.color = 'red';

  // console.log(randomColorNumber)
}

randomBtn.addEventListener('click', setRandom);


let val = 'Hi🖐 I\'m Isaac Samuel. let work together, mail me: samuelisaac@gmail.com'
console.log(val)
