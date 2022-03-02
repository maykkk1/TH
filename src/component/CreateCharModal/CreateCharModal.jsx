import React from "react";
import CreateCharModalCharacters from "./CreateCharModalCharacters/CreateCharModalCharacters";
import "./style.css";
import { CharactersList } from "../../services/CharactersList/CharactersList";
import useUser from "../../Hooks/useUser";

const CreateCharModal = ({onClose}) => {
  const {user, setUser} = useUser()
  const handleOutsideClick = (e) => {
    if(e.target.id === 'CharModal') onClose()
  }

  return (
    <div onClick={handleOutsideClick} id="CharModal" className="CreateCharModal">
      <div className="CreateCharModal_Container">
        <div onClick={()=>{
          onClose()
        }}  className="CreateCharModal_Close"></div>
        <h1>Escolha sua classe</h1>
        <div className="CreateCharModal_CharacteresSection">
          {CharactersList.map((element) => {
            return(
              <CreateCharModalCharacters cardInfo={element} />
            )
          })}
        </div>
        <form className="CreateCharModal_Form" action="">
          <label htmlFor="name">Nome</label>
          <input onChange={(e)=>{
            setUser(prev => ({
              ...prev,
              name:e.target.value
            }))
          }} autoComplete="off" id="name" type="text" />
          <button type="submit" onClick={(e)=>{
            e.preventDefault()
            console.log(user)
          }}>
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateCharModal;
