import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul className="list">
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
