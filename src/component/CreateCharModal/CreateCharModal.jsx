import React, { useState } from "react";
import "./style.css";
import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";
import CharacteresContainer from "./CharacteresContainer/CharacteresContainer";

const CreateCharModal = ({ onClose }) => {
  const { user, SetUser} = useUser();
  const [createError, SetCreateError] = useState(false);
  const [userName, SetUserName] = useState()
  const [genderSelected, SetGenderSelected] = useState("female");
  const [characterSelected, SetCharacterSelected] = useState('female_warrior.webp');

  const nav = useNavigate();
  const navigation = () => {
    nav("/home");
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "CharModal") onClose();
  };

  const handleNameUser = (e) => {
    let tempNameValue = e.target.value;
    if(tempNameValue.length <= 15){
      SetUserName(tempNameValue)
    }
  }

  const handleCreateError = () => {
    return createError ? {opacity:"1"} : {opacity:"0"};
  }

  const createUser = () => {
    if(userName === undefined || characterSelected === undefined) return SetCreateError(true);
    SetUser(user =>({
      ...user,
      name:userName,
      avatar:characterSelected
    }))
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
        <h1>Select your class</h1>
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
          characterSelected={characterSelected}
          setCharacterSelected={SetCharacterSelected}
          genderSelected={genderSelected}
        />
        <form>
          <label htmlFor="CreateCharModal_userName">Name</label>
          <input onChange={(e)=>{handleNameUser(e)}} value={userName} type="text" id="CreateCharModal_userName" />
          <span id="createError" style={handleCreateError()}>Escolha sua classe e informe o seu nome!</span>
          <button onClick={(e)=>{
            e.preventDefault()
            createUser()
          }}>Create</button>
        </form>
      </div>
    </div>
  );
};
export default CreateCharModal;
