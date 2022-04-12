import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../../../LocalStorage/user";


function GoldView() {
  return (
    <span className="GoldView">
      <span className="GoldView_Gold_icon">
        <FontAwesomeIcon icon={faCoins} />
      </span>
      <span className="GoldView_Gold_value">{getUser().gold}</span>
    </span>
  );
}

export default GoldView;
