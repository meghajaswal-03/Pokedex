import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, exp }) {
    const imgUrl = `${BASE_URL}${id}.png`;
    return (
        <div className="Pokecard">
            <img src={imgUrl} alt={name} />
            <h4>{name}</h4>
            <p>Type: {type}</p>
            <p>EXP: {exp}</p>
        </div>
    );
}

export default Pokecard;