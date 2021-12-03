const url = 'https://pokeapi.co/api/v2/pokemon/';

/* 
1. User enter pokemon name.
2. After pressing "enter" or touching magnifying glass icon, there will be sent request to pokeapi.
2.1 If no pokemon name was entered there will be random pokemons displayed.
2.2 If there will be error there will be error screen.
3. Afrer succesfull response pokemon cards with number of pokemon, default front sprite, and pokemon name will be displayed.
~~~~~~~ More features soon ~~~~~~~ 
*/

// VARIABLES
const searchButton = document.querySelector('.button-search');
const input = document.getElementById('search');
const cardsWrapper = document.querySelector('.pokemon-cards__wrapper');

// Class to make pokemon card
class PokemonCard{
  constructor(){

  }

  createCard(){
    <div class="pokemon-card">
    <div class="pokemon-card__header pokemon-card__header--psychic"></div>
    <div class="pokemon-card__sprite flex-vCenter-hCenter"></div>
    <div class="pokemon-card__pokemon-name"></div>
  </div>
  let mainDiv = document.createElement('div');
  let headerDiv = document.createElement('div');
  let spriteWrapper = document.createElement('div');
  let nameDiv = document.createElement('div');
  let pokemonSprite = document.createElement('img');
  mainDiv.classList.add('pokemon-card');
  // mainDiv.classList.add('pokemon-card--type'); <-- here will be defined border color
  headerDiv.classList.add('pokemon-card__header');
  // headerDiv.classList.add('pokemon-card__header--type'); <-- here will be defined font color
  spriteWrapper.classList.add('pokemon-card__sprite');
  spriteWrapper.classList.add('flex-vCenter-hCenter');
  }
}

//placeholder
searchButton.addEventListener('click', ()=>{alert('You pressed the button! Input value is: ' + input.value)});
//placeholder

fetch(url + input.value).then(response => response.json()).then(data => console.log(data));