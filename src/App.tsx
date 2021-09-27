import { useEffect, useState } from "react";
import "./styles.css";
import PokemonList from "./PokemonList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PokemonList />
    </div>
  );
}
