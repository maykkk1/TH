import React, { useState } from "react";
import CreateCharModal from "../../component/CreateCharModal/CreateCharModal";
import "./style.css";

const CreateCharPage = () => {
  const [isCreateCharModalVisible, SetIsCreateCharModalVisible] =
    useState(false);

  const showModal = () => {
    isCreateCharModalVisible
    ? SetIsCreateCharModalVisible(false)
    : SetIsCreateCharModalVisible(true)
  }
  return (
    <div className="CreateCharPage">
      <div className="CreateCharPage_panel">
        <h1 className="CreateCharPage_Title">T&H</h1>
        <h2 className="CreateCharPage_Title2">Seja bem vindo, aventureiro!</h2>
        <button
          onClick={showModal}
          className="CreateCharPage_Button"
        >
          Criar Personagem
        </button>
        {isCreateCharModalVisible ? <CreateCharModal onClose={()=>{SetIsCreateCharModalVisible(false)}} /> : null}
      </div>
    </div>
  );
};

export default CreateCharPage;
