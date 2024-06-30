import React, {useEffect, useState} from 'react';
import classes from './Pokemon.module.css'
import axios from "axios";
import cardLil from "./components/card_lil/cardLil";
import CardLil from "./components/card_lil/cardLil";


const PokemonCard = ({loading, pokemons}) => {
    // const [pokemonDetails, setPokemonDetails] = useState([]);
    //
    //
    // useEffect(() => {
    //     axios.get(pokemons.url).then(response => {
    //         setPokemonDetails(response.data);
    //     });
    // }, [pokemons.url]);
    //





    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <ul className={classes.cards}>
            {
                pokemons.map(pokemon => <CardLil key={pokemon.name} pokemon={pokemon} />)
            }
        </ul>
    );
};

export default PokemonCard;