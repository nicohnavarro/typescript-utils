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
type FetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(url: string, cb?: T): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then(resp => resp.json())
      .then(cb);
    return undefined as FetchPokemonResult<T>;
  }
  else {
    return fetch(url).then(resp => resp.json()) as FetchPokemonResult<T>;
  }
}
const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

fetchPokemon(url, (data) => { data.results.forEach((pokemon) => console.log(pokemon.name)) });

(async function () {
  const data=<PokemonResults> await fetchPokemon(url);
  data.results.forEach((pokemon) => console.log(pokemon.name));
})