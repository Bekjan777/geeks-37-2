import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.css';
import axios from "axios";


import '../../reset.css';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/PokemonCard/components/pagination/Pagination";



const MainPage = () => {


    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 12;

    const lastPage = currentPage * pokemonsPerPage;
    const firstPage = lastPage - pokemonsPerPage;
    const currentPokemons = pokemons.slice(firstPage, lastPage)



    useEffect(() => {

        const getPokemons = async () => {
            setLoading(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            setPokemons(response.data.results)
            console.log(pokemons['results'])
            setLoading(false);
        }


        getPokemons()
    }, []);





    return (
        <div className={classes.MainPage}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.h1}>Pokemon</h1>
                </div>
                <PokemonCard pokemons={currentPokemons} loading={loading} />
                <Pagination  currentPokemons={currentPokemons} currentPage={currentPage} totalPokemons={pokemons.length} setCurrentPage={setCurrentPage} pokemonPerPage={pokemonsPerPage} />

            </div>
        </div>
    );
};

export default MainPage;
