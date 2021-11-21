import React from "react";
import { useState } from "react";
import { searcPokemon } from "./api";
// const {useState} = React;

const Searcbar = () => {
   const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (e) =>{ 
        // console.log(e.target.value);
        setSearch(e.target.value);
    }

    const onClick = async (e)=>{
        const data = await searcPokemon(search);
        console.log(data);
        setPokemon(data);
    }

    return(

        <div className= "fichas-container" className="colorfram">
            <div className="searcbar">
            <input placeholder="Buscar un Pokemon :V"
            onChange= {onChange}/>
            </div> 
            <div className="searcbar-btn">
                 <button  onClick={onClick}>Buscar</button>
            </div> 
            <div >
                {pokemon &&
                <div className="colorblack">
                    <div>Nombre: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default}></img>
                </div>
                }
            </div>     
         </div>
    )
};

export default Searcbar;