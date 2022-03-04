import React from "react";
import "./style.css"
import useUser from "../../../Hooks/useUser";

function UserHUD() {
    const {user, setUser} = useUser()
  return (
    <div className="UserHUD">
        <div className="UserHUD_AvatarSection">
            <span className="UserHUD_Name">{user.name}</span>
            <div className="UserHUD_AvatarWrapper">
                <img src={require(`../../../assests/images/characters/${user.avatar}`)} alt="" />
            </div>
            <span className="UserHUD_Class">{user.classe}</span>
            <span className="UserHUD_Level">{user.level}</span>
        </div>
    </div>
  );
}

export default UserHUD;
