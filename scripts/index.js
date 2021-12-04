const url = "https://pokeapi.co/api/v2/pokemon/";

/* 
1. User enter pokemon name.
2. After pressing "enter" or touching magnifying glass icon, there will be sent request to pokeapi.
2.1 If no pokemon name was entered there will be random pokemons displayed.
2.2 If there will be error there will be error screen.
3. Afrer succesfull response pokemon cards with number of pokemon, default front sprite, and pokemon name will be displayed.
~~~~~~~ More features soon ~~~~~~~ 
*/

// VARIABLES
const searchButton = document.querySelector(".button-search");
const input = document.getElementById("search");
const cardsWrapper = document.querySelector(".pokemon-cards__wrapper");

// Class to make pokemon card
// Access to pokemon info:
/*
 data.id = id number of pokemon
 data.sprites.front_default = pokemon sprite

 */

class PokemonCard {
  constructor(id, name, sprite, type) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
    this.type = type;
  }

  createCard() {
    let mainDiv = document.createElement("div");
    let headerDiv = document.createElement("div");
    let spriteWrapper = document.createElement("div");
    let nameDiv = document.createElement("div");
    let pokemonSprite = document.createElement("img");
    mainDiv.classList.add("pokemon-card");
    mainDiv.classList.add("pokemon-card--" + this.type);
    headerDiv.classList.add("pokemon-card__header");
    headerDiv.classList.add("pokemon-card__header--" + this.type);
    headerDiv.innerText = "#" + this.id;
    spriteWrapper.classList.add("pokemon-card__sprite");
    spriteWrapper.classList.add("flex-vCenter-hCenter");
    pokemonSprite.setAttribute("src", this.sprite);
    nameDiv.classList.add("pokemon-card__pokemon-name");
    nameDiv.classList.add("pokemon-card__pokemon-name--" + this.type);
    nameDiv.innerText = this.name;
    mainDiv.append(headerDiv);
    spriteWrapper.append(pokemonSprite);
    mainDiv.append(spriteWrapper);
    mainDiv.append(nameDiv);

    return mainDiv;
  }
}

searchButton.addEventListener("click", () => {
  let sin = input.value.toLowerCase();
  searchIt(sin);
});

function searchIt(query) {
  if(query != ''){
  fetch(url + query)
    .then((response) => response.json())
    .then((data) => {
      showIt(data);
    });
  }else{
    console.log('no entry');
  }
}


  function showIt(data) {
    cardsWrapper.append(
      new PokemonCard(
        data.id,
        data.name,
        data.sprites.front_default,
        data.types[0].type.name
      ).createCard()
    );
  }
