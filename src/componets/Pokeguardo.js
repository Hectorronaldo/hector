import React from "react";

const Pokedex = (props) => {
    // console.log(props)
    const {pokemons} = props;
    return(
        <div>
            <div className="pagina-contener">
                <h1>10 primeros Pokemones</h1>
            </div>
            <div className="pokedex-grid">
              {pokemons.map((pokemon, idx)=>{
                  return(
                      
                      <div 
                      key={pokemon.name}>
                          Pokemon#{idx+1}: {pokemon.name}

                      </div>
                  )
              })}
            </div>
        </div>
    );
};

export default Pokedex;