import React from "react";

const ExterC = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
    <nav>
      <div>
          <div>
            <img src={imgUrl} alt="pokeapi-logo" className="exterc-image"></img>
          </div>
      </div>
    </nav>
    );
};

export default ExterC;