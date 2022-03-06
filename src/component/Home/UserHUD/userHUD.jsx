import React from "react";
import "./style.css";
import useUser from "../../../Hooks/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function UserHUD() {
  const { user, setUser } = useUser();
  return (
    <div className="UserHUD">
      <div className="UserHUD_AvatarSection">
        <span className="UserHUD_Name">{user.name}</span>
        <div className="UserHUD_AvatarWrapper">
          <img
            src={require(`../../../assests/images/characters/${user.avatar}`)}
            alt=""
          />
        </div>
        <span className="UserHUD_Class">{user.classe}</span>
        <span className="UserHUD_Level">{user.level}</span>
        <span className="UserHUD_Gold">
          <span className="UserHUD_Gold_icon">
            <FontAwesomeIcon icon={faCoins} />
          </span>
          <span className="UserHUD_Gold_value">
            {user.gold}
            </span>
        </span>
      </div>
    </div>
  );
}

export default UserHUD;
