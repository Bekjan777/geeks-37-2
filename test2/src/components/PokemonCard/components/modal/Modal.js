import React from 'react';
import c from './Modal.module.css'
import close from '../../../../assets/close.svg'

const Modal = ({pokemonDetails,name, setShow, show}) => {
    console.log(pokemonDetails)
    const moves = pokemonDetails?.moves.slice(0,4)
    return (
        <div className={`${c.modal} ${!show && c.hidden}`}>
            <div className={c.modal_window}>
                <div onClick={()=> setShow(prev=>!prev)} className={c.close}><img  src={close} alt="close"/></div>
                <div className={c.window_inner}>
                    <div className={c.windows__inner}>
                        <div className={c.name}>
                            <div className={c.img}>
                                <img className={c.img_} src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
                                     alt="pokemon_png"/>
                            </div>
                            <p className={c.p}>{name}</p>
                        </div>
                        <div className={c.inner}>
                            <div className={c.abilities}>
                                    Abilities: {
                                    pokemonDetails?.abilities.map((det, i) => (
                                        <span key={i} className={c.span}>{
                                            (i < pokemonDetails?.abilities?.length-1) ? `${det.ability.name}, ` : `${det.ability.name}`
                                        }</span>
                            ))}
                            </div>
                            <div className={c.stats}>
                                Stats: {

                                pokemonDetails?.stats.map((det, i) => (
                                    <span key={i} className={c.span}>{
                                        (i < pokemonDetails?.stats?.length-1) ? `${det.stat.name}, ` : `${det.stat.name}`
                                    }</span>
                                ))
                            }
                            </div>
                            <div className={c.types}>
                                Types: {

                                pokemonDetails?.types.map((det, i) => (
                                    <span key={i} className={c.span}>{
                                        (i < pokemonDetails?.types?.length-1) ? `${det.type.name}, ` : `${det.type.name}`
                                    }</span>
                                ))
                            }
                            </div>
                            <div className={c.some_moves}>
                                Some-moves: {

                                moves.map((det, i) => (
                                    <span key={i} className={c.span}>{
                                        (i < pokemonDetails?.moves?.length-1) ? `${det.move.name}, ` : `${det.move.name}`
                                    }</span>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;