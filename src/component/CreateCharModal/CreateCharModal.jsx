import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";
import CharacteresContainer from "./CharacteresContainer/CharacteresContainer";
import {getUser, storeUser} from "../../LocalStorage/user";

const CreateCharModal = ({ onClose }) => {
  const [createError, SetCreateError] = useState(false);
  const [userName, SetUserName] = useState()
  const [genderSelected, SetGenderSelected] = useState("female");
  const [characterSelected, SetCharacterSelected] = useState('female_warrior.webp');
  const [classSelected, SetClassSelected] = useState('Warrior')

  const nav = useNavigate();
  const navigation = () => {
    nav("/home");
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "CharModal") onClose();
  };

  const handleNameUser = (e) => {
    let tempNameValue = e.target.value;
    if(tempNameValue.length <= 10){
      SetUserName(tempNameValue)
    }
  }

  const handleCreateError = () => {
    return createError ? {opacity:"1"} : {opacity:"0"};
  }

  const createUser = () => {
    if(userName === undefined || characterSelected === undefined) return SetCreateError(true);
    let classBonus = {}
    if(classSelected === 'Mage') classBonus = {xp:1.3, gold:1.1}
    if(classSelected === 'Rogue') classBonus= {xp:1.1, gold:1.3}
    if(classSelected === 'Warrior') classBonus = {xp:1.15, gold:1.15}
    storeUser(userName, characterSelected, classSelected, classBonus.xp, classBonus.gold)
    navigation()
  }

  return (
    <div
      onClick={handleOutsideClick}
      id="CharModal"
      className="CreateCharModal"
    >
      <div className="CreateCharModal_Container">
        <div
          onClick={() => {
            onClose();
          }}
          className="CreateCharModal_Close"
        ></div>
        <h1>Selecione sua classe</h1>
        <div className="CreateCharModal_GenderChoiseSection">
          <button
            onClick={() => {
              SetGenderSelected("female");
            }}
          >
            <FontAwesomeIcon icon={faVenus} />
          </button>
          <button
            onClick={() => {
              SetGenderSelected("male");
            }}
          >
            <FontAwesomeIcon icon={faMars} />
          </button>
        </div>
        <CharacteresContainer
          SetClassSelected={SetClassSelected}
          characterSelected={characterSelected}
          setCharacterSelected={SetCharacterSelected}
          genderSelected={genderSelected}
        />
        <form>
          <label htmlFor="CreateCharModal_userName">Nome</label>
          <input onChange={(e)=>{handleNameUser(e)}} autoComplete='off' value={userName} type="text" id="CreateCharModal_userName" />
          <span id="createError" style={handleCreateError()}>Escolha sua classe e informe o seu nome!</span>
          <button onClick={(e)=>{
            e.preventDefault()
            createUser()
          }}>Criar</button>
        </form>
      </div>
    </div>
  );
};
export default CreateCharModal;
