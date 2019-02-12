var pokemons = ['Bulbasaur',
 'Ivysaur',
 'Venusaur',
 'Charmander',
 'Charmeleon',
 'Charizard',
 'Squirtle',
 'Wartortle',
 'Blastoise',
 'Caterpie',
 'Metapod',
 'Butterfree',
 'Weedle',
 'Kakuna',
 'Beedrill',
 'Pidgey',
 'Pidgeotto',
 'Pidgeot',
 'Rattata',
 'Raticate',
 'Spearow',
 'Fearow',
 'Ekans',
 'Arbok',
 'Pikachu',
 'Raichu',
 'Sandshrew',
 'Sandslash',
 'Nidoran♀',
 'Nidorina',
 'Nidoqueen',
 'Nidoran♂',
 'Nidorino',
 'Nidoking',
 'Clefairy',
 'Clefable',
 'Vulpix',
 'Ninetales',
 'Jigglypuff',
 'Wigglytuff',
 'Zubat',
 'Golbat',
 'Oddish',
 'Gloom',
 'Vileplume',
 'Paras',
 'Parasect',
 'Venonat',
 'Venomoth',
 'Diglett',
 'Dugtrio',
 'Meowth',
 'Persian',
 'Psyduck',
 'Golduck',
 'Mankey',
 'Primeape',
 'Growlithe',
 'Arcanine',
 'Poliwag',
 ];


var colors = {fire: '#F08030',
normal: "#A8A878", 
water: "#6890F0" ,
electric: "#F8D030" ,
fighting: "#C03028" ,
poison: "#A040A0" ,
ground: "#E0C068" ,
flying: "#A890F0" ,
psychic: '#F85888' ,
bug: '#A8B820' ,
rock: '#B8A038',
ghost: '#705898' ,
dragon: '#7038F8' ,
dark: '#705848' ,
steel: '#B8B8D0' ,
fairy: '#EE99AC' ,
ice: '#98D8D8' ,
grass: '#78C850' }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);


function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 100);
  });
}

async function  generateCard(array){
  for (i = 0; i<pokemons.length; i++){
    pokemon = pokemons[i].toLowerCase()
    var request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + String(i+1), true);
    request.onload = function () {

      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      
      const sprite = document.createElement('img');
      sprite.setAttribute('class', 'sprite');
      sprite.src = data.sprites.front_default;
      
      const card = document.createElement('div');
      //card.setAttribute('class', 'card ');
      if (data.types[1] !== undefined) {
        card.setAttribute('class', 'card '+ data.types[0].type.name + " " +data.types[1].type.name);
      } else {
        card.setAttribute('class', 'card '+ data.types[0].type.name);
      }

      const h1 = document.createElement('h1');
      h1.textContent = capitalizeFirstLetter(data.species.name);

      

      card.addEventListener ("click", function() {
        detailView(data.species.name, data)
      });

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(sprite);
      

    }
const a = await doubleAfter2Seconds(10);
  request.send();
  }


}

function detailView(pokemon, data) {
  const detailCard = document.createElement('div');
  if (data.types[1] !== undefined) {
        detailCard.setAttribute('class', 'detailCard '+ data.types[0].type.name + " " +data.types[1].type.name);
      } else {
        detailCard.setAttribute('class', 'detailCard '+ data.types[0].type.name);
      }
  container.appendChild(detailCard);
  backButton(detailCard);
  infoCard(data,detailCard);
}

function backButton(detailCard) {
  const back = document.createElement('img');
  back.setAttribute('class', 'backButton');
  back.src = '../static/left-arrow.svg';
  detailCard.appendChild(back);
  back.addEventListener ("click", function() {
    container.removeChild(detailCard);
  });
}

async function infoCard(data,detailCard) {
  //title
  const infoCard = document.createElement('div');
  infoCard.setAttribute('class', 'infocard ' + pokemon)
  detailCard.appendChild(infoCard)
  const h2 = document.createElement('h2');
  h2.textContent = capitalizeFirstLetter(data.species.name);

  h2.setAttribute('class', 'title')
  infoCard.appendChild(h2);

  //sprite
  const cardSprite = document.createElement('img');
  cardSprite.setAttribute('class', 'cardSprite');
  cardSprite.src = data.sprites.front_default;
  infoCard.appendChild(cardSprite);

  //types
  var type_show = 'normal'
  if (data.types[1] !== undefined) {
        const type0 = document.createElement('h3');
        type00 = data.types[1].type.name
        type0.setAttribute('class', 'typeCard ' + data.types[1].type.name);
        type0.textContent = capitalizeFirstLetter(data.types[1].type.name);
        type0.style.background = colors[type00];
        
        infoCard.appendChild(type0);
        const type1 = document.createElement('h3');
        type01 = data.types[0].type.name
        type1.setAttribute('class', 'typeCard' + data.types[0].type.name);
        type1.textContent = capitalizeFirstLetter(data.types[0].type.name);
        type1.style.background = colors[type01];
        
        infoCard.appendChild(type1);
        type_show = type00;
      } else {
        const type0 = document.createElement('h3');
        type00 = data.types[0].type.name
        type0.setAttribute('class', 'typeCard' + data.types[0].type.name);
        type0.textContent = capitalizeFirstLetter(data.types[0].type.name);
        type0.style.background = colors[type00];
        infoCard.appendChild(type0);
        type_show = type00;
      }
     
    h2.style.background = colors[type_show]; 
    h2.style.color = 'white';

    //flavor text
    var request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/' + data.species.name, true);
    request.onload = function () {
    var species_data = JSON.parse(this.response);
    //console.log(species_data)
    const what_pokemon = document.createElement('p')
    what_pokemon.textContent = species_data.genera[2].genus;
    what_pokemon.setAttribute('class', 'whatPokemon');
    infoCard.appendChild(what_pokemon);
    const flavour = document.createElement('p');
    for (var i = 0; i<4;i++){
      if (species_data.flavor_text_entries[i].language.name == "en") {
        flavour.textContent = species_data.flavor_text_entries[i].flavor_text; 
      }
    } 
    infoCard.appendChild(flavour)
    }
    const a = await doubleAfter2Seconds(10);
    request.send();
    
    
}

generateCard(pokemons);

var el = x => document.getElementById(x);
function checkempty(){
  if (el('result-label').innerHTML == "") {
    console.log("empty field");
  }
}

checkempty()

