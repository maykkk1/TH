import React, { useEffect, useState } from "react";
import CreateCharModalCharacters from "./CreateCharModalCharacters/CreateCharModalCharacters";
import "./style.css";
import { CharactersList } from "../../services/CharactersList/CharactersList";
import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";

const CreateCharModal = ({ onClose }) => {
  const { user, setUser } = useUser();
  const [card_0_Selected, setCard_0_Selected] = useState(0);
  const [card_1_Selected, setCard_1_Selected] = useState(0);
  const [card_2_Selected, setCard_2_Selected] = useState(0);

  const changeSelectedCard = (card) => {
    if(card_0_Selected === 0 && card_1_Selected == 0 && card_2_Selected == 0){
      card(.3);
    } else {
      setCard_0_Selected(0);
      setCard_1_Selected(0);
      setCard_2_Selected(0);
      card(.3)
    }
  };
  const nav = useNavigate();
  const navigation = () => { 
    nav('/home');
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "CharModal") onClose();
  };

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
        <h1>Escolha sua classe</h1>
        <ul className="CreateCharModal_CharacteresSection">
          <CreateCharModalCharacters
            cardChoise={setCard_0_Selected}
            changeCard={changeSelectedCard}
            opacity={card_0_Selected}
            cardInfo={CharactersList[0]}
            id={0}
          />
          <CreateCharModalCharacters
            cardChoise={setCard_1_Selected}
            changeCard={changeSelectedCard}
            opacity={card_1_Selected}
            cardInfo={CharactersList[1]}
            id={1}
          />
          <CreateCharModalCharacters
            cardChoise={setCard_2_Selected}
            changeCard={changeSelectedCard}
            opacity={card_2_Selected}
            cardInfo={CharactersList[2]}
            id={2}
          />
        </ul>
        <form className="CreateCharModal_Form" action="">
          <label htmlFor="name">Nome</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
            autoComplete="off"
            id="name"
            type="text"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(user);
              navigation()
            }}
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateCharModal;
