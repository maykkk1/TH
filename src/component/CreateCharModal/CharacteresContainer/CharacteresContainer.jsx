import React, { useEffect, useState } from "react";
import Character from "../Character/Character";

function CharacteresContainer(props) {
  const maleClasses = [
    <Character
      key={0}
      characterClass={"Warrior"}
      characterAvatar={"male_warrior.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
    />,
    <Character
      key={1}
      characterClass={"Rogue"}
      characterAvatar={"male_rogue.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
    />,
    <Character
      key={2}
      characterClass={"Mage"}
      characterAvatar={"male_mage.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
    />,
  ];

  const femaleClasses = [
    <Character
      key={0}
      characterClass={"Warrior"}
      characterAvatar={"female_warrior.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
    />,
    <Character
      key={1}
      characterClass={"Rogue"}
      characterAvatar={"female_rogue.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
    />,
    <Character
      key={2}
      characterClass={"Mage"}
      characterAvatar={"female_mage.webp"}
      setCharacterSelected={props.setCharacterSelected}
      characterSelected={props.characterSelected}
      SetClassSelected={props.SetClassSelected}
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
