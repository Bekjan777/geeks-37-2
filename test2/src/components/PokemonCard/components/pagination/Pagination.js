import React from 'react';
import c from './pagination.module.css'
const Pagination = ({currentPokemons, totalPokemons, currentPage, setCurrentPage, pokemonPerPage}) => {

    const pageNum =[]

    for(let i=0; i<totalPokemons; i++){
        pageNum.push(i)
    }

    return (
        <div className={c.main}>
            <button onClick={() => currentPage > 1 && setCurrentPage(prev => prev-1)} className={c.btn_prev}>prev</button>
            <div className={c.page}>{currentPage}</div>
            <button onClick={() => currentPage < Math.ceil(totalPokemons/ pokemonPerPage) && setCurrentPage(prev => prev+1)} className={c.btn_next}>next</button>
        </div>
    );
};

export default Pagination;