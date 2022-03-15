import React, { useEffect, useState } from "react";
import "./style.css";

function Character(props) {

  const characterSelectedStyle = {
    border: "4px solid var(--primary-color)",
    boxShadow: "0 5px 10px var(--primary-color)",
  };

  const ChangeStyle = () => {
    if(props.characterAvatar == props.characterSelected) {
      return characterSelectedStyle
    } else {
      return {}
    }
  }


  return (
    <div className="Character">
      <h2>{props.characterClass}</h2>
      <div
        onClick={() => {
          props.setCharacterSelected(props.characterAvatar);
        }}
        style={ChangeStyle()}
        className="Character_imgCharacterWrapper"
      >
        <img
          src={require(`../../../assests/images/characters/${props.characterAvatar}`)}
          alt=""
        />
      </div>
    </div>
  );
}


export default Character;
