import React, { useEffect, useState } from "react";
import "./style.css";
import Character from "../Character/Character";

function CharacteresContainer(props) {
  const maleClasses = [
    <Character
      key={0}
      characterClass={"Warrior"}
      characterAvatar={"male_warrior.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
    <Character
      key={1}
      characterClass={"Rogue"}
      characterAvatar={"male_rogue.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
    <Character
      key={2}
      characterClass={"Mage"}
      characterAvatar={"male_mage.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
  ];

  const femaleClasses = [
    <Character
      key={0}
      characterClass={"Warrior"}
      characterAvatar={"female_warrior.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
    <Character
      key={1}
      characterClass={"Rogue"}
      characterAvatar={"female_rogue.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
    <Character
      key={2}
      characterClass={"Mage"}
      characterAvatar={"female_mage.png"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
    />,
  ];

  const [selectedGender, SetSelectedGender] = useState(femaleClasses);

  useEffect(() => {
    props.genderSelected === "female"
      ? SetSelectedGender(femaleClasses)
      : SetSelectedGender(maleClasses);
  }, [props.genderSelected, props.characterSelected]);

  return (
    <div className="CreateCharModal_CharacterOptionsSection">
      {selectedGender.map((element) => {
        return element;
      })}
    </div>
  );
}

export default CharacteresContainer;
