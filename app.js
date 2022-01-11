const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const heading = document.querySelector('h3');
const backgroundGenerator = document.querySelector('#gradient');

function setGradient(){
  backgroundGenerator.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  heading.textContent = backgroundGenerator.style.background +',';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
  
