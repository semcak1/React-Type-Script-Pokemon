import { useState, useEffect } from "react";
import "./styles.css";

export interface Images2 {
  small: string;
  large: string;
}
export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  attacks: null;
  weaknesses: null;
  resistances: null;
  retreatCost: string[];
  convertedRetreatCost: number;
  set: null;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: null;
  images: Images2;
  tcgplayer: null;
  cardmarket: null;
  evolvesFrom: string;
  abilities: null;
  evolvesTo: string[];
  flavorText: string;
  rules: string[];
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://api.pokemontcg.io/v2/cards");
      const result = await response.json();
      setPokemons(result.data);
    }
    getCharacters();
  }, []);

  // console.log("asd", pokemons.slice(0, 10));

  return pokemons?.slice(0, 10).map((pokemon) => (
    <>
      <img src={pokemon.images.small} className="Magex" />
      <div className="Names">{pokemon.name}</div>
    </>
  ));
};

export default PokemonList;
