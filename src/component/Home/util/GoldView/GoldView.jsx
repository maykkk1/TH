import React from "react";
import "./style.css";
import useUser from "../../../../Hooks/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function GoldView() {
  const { user } = useUser();
  return (
    <span className="GoldView">
      <span className="GoldView_Gold_icon">
        <FontAwesomeIcon icon={faCoins} />
      </span>
      <span className="GoldView_Gold_value">{user.gold}</span>
    </span>
  );
}

export default GoldView;
