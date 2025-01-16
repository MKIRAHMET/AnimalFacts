import { animals } from './animals';
import { React} from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

function displayFact (e) {
  const selectedAnimal = e.target.alt;
  const facts = animals[selectedAnimal].facts;
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('fact').innerHTML = randomFact;

}

const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>;

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
onClick={(e) => displayFact(e)}
    />
  );
}
const showBackground = true;

const title = '';
const animalFacts = (
  <div>
{showBackground &&background}
<div className = 'animals'>
{images}
</div>
  <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
  <p id='fact'> </p>
  </div>
);

root.render(animalFacts);

