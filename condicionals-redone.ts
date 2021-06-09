import fetch from 'node-fetch';

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

function fetchPokemon(
    url: string, 
    cb: (data:PokemonResults)=>void
  ): void;
function fetchPokemon(
    url: string
  ): Promise<PokemonResults>; 
function fetchPokemon(
    url: string,
    cb?: (data:PokemonResults)=>void
  ): unknown {
  if (cb) {
    fetch(url)
      .then(resp => resp.json())
      .then(cb);
    return undefined 
  }
  else {
    return fetch(url).then(resp => resp.json())
  }
}

fetchPokemon(url, (data) => { data.results.forEach((pokemon) => console.log(pokemon.name)) });

(async function () {
  const data= await fetchPokemon(url);
  data.results.forEach((pokemon) => console.log(pokemon.name));
})