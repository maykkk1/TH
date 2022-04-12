import React, { useEffect, useState } from "react";
import CreateCharModal from "../../component/CreateCharModal/CreateCharModal";
import "./style.css";
import { getUser } from "../../LocalStorage/user";
import { useNavigate } from "react-router-dom";

const CreateCharPage = () => {
  const [isCreateCharModalVisible, SetIsCreateCharModalVisible] =
    useState(false);

  const showModal = () => {
    isCreateCharModalVisible
    ? SetIsCreateCharModalVisible(false)
    : SetIsCreateCharModalVisible(true)
  }

  const nav = useNavigate();
  const navigation = () => {
    nav("/home");
  };

  useEffect(()=>{

    if(getUser() != null) navigation()
  }, [])
  return (
    <div className="CreateCharPage">
      <div className="CreateCharPage_panel">
        <h1 className="CreateCharPage_Title">T&H</h1>
        <button
          onClick={showModal}
          className="CreateCharPage_Button"
        >
          Start
        </button>
        {isCreateCharModalVisible ? <CreateCharModal onClose={()=>{SetIsCreateCharModalVisible(false)}} /> : null}
      </div>
    </div>
  );
};

export default CreateCharPage;
