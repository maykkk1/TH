import React from "react";
import "./style.css";

function Character(props) {

  const characterSelectedStyle = {
    boxShadow: "0 5px 10px #9CC0E7",
  };

  const ChangeStyle = () => {
    if(props.characterAvatar === props.characterSelected) {
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
          props.SetClassSelected(props.characterClass)
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
