import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './cardLil.module.css'
import Modal from "../modal/Modal";

const CardLil = ({ pokemon }) => {
    const [show, setShow] = useState(false)
    const [pokemonDetails, setPokemonDetails] = useState(null);
    useEffect(() => {
        axios.get(pokemon.url).then(response => {
            setPokemonDetails(response.data);
        });
    }, [pokemon.url]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }
    // console.log(pokemonDetails)
    return (<>

            <div className={classes.card}>
                <div className={classes.heading}>
                    <div className={classes.img}>
                        <img className={classes.img__img} src={pokemonDetails.sprites.other.dream_world.front_default}
                             alt={pokemon.name}/>
                    </div>
                    <h2 className={classes.head}>{pokemonDetails.name}</h2>
                </div>
                <button onClick={() => setShow(prev => !prev)} className={classes.btn}>Подробнее</button>
            </div>
            <Modal pokemonDetails={pokemonDetails} name={pokemon.name} show={show} setShow={setShow}  />
        </>
    );
};

export default CardLil;