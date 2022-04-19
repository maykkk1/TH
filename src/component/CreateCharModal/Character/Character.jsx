import React, { useEffect, useState } from "react";
import "./style.css";

function Character(props) {
  const [isBonusHoverVisible, SetIsBonusHoverVisible] = useState(false)
  const [classBonus, SetClassBonus] = useState({xp:30, gold:10})

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

  const bonusHover = () => {
    isBonusHoverVisible 
    ? SetIsBonusHoverVisible(false)
    : SetIsBonusHoverVisible(true)
  }

  useEffect(()=>{
    if(props.characterClass == 'Mage') SetClassBonus({xp:30, gold:10})
    if(props.characterClass == 'Rogue') SetClassBonus({xp:10, gold:30})
    if(props.characterClass == 'Warrior') SetClassBonus({xp:15, gold:15})
  })

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
        onMouseLeave={bonusHover}
        onMouseEnter={bonusHover}
      >
        <img
          src={require(`../../../assests/images/characters/${props.characterAvatar}`)}
          alt=""
        />
      </div>
      {isBonusHoverVisible
      ?<span className="Character__bonus"><p>{`+ ${classBonus.xp}% xp`}</p><p>{`+ ${classBonus.gold}% gold`}</p></span>
      : null}
    </div>
  );
}


export default Character;
