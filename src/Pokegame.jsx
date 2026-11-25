import Pokedex from './Pokedex';
import pokemonList from './pokemonList';

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function Pokegame() {
    const shuffledPokemon = shuffle(pokemonList);
    const half = Math.floor(shuffledPokemon.length / 2);
    const hand1 = shuffledPokemon.slice(0, half);
    const hand2 = shuffledPokemon.slice(half);
    return (
        <div>
            <Pokedex pokemonList={hand1} />
            <Pokedex pokemonList={hand2} />
        </div>
    );
}

export default Pokegame;