import Pokecard from './Pokecard';
import PokemonList from './pokemonList';
import "./Pokedex.css";

function Pokedex({ pokemonList }) {
    return (
        <div className="Pokedex-cards">
            {pokemon.map((p, i) => (
                <Pokecard 
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                />
            ))}
        </div>
    );
}

export default Pokedex;