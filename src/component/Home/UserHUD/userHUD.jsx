import {React, useEffect} from "react";
import "./style.css";
import GoldView from "../util/GoldView/GoldView";
import { getUser } from "../../../LocalStorage/user";
import {getTodoList, setTodoList} from "../../../LocalStorage/TodoStorage"
import {getHabitsList, setHabitsList} from "../../../LocalStorage/habitsList"
import { setRewardsList, getRewardsList } from "../../../LocalStorage/rewardsList";
import ClassIcon from "../util/ClassIcon/ClassIcon";
import { useNavigate } from "react-router-dom";

function UserHUD() {

  const classIcon = () => {
    if (getUser().classe === 'Warrior') return <ClassIcon selectedClassName={'Warrior'} selectedClass={'sword.png'}/>
    if (getUser().classe === 'Mage') return <ClassIcon selectedClassName={'Mage'} selectedClass={'staff.png'}/>
    if (getUser().classe === 'Rogue') return <ClassIcon selectedClassName={'Rogue'} selectedClass={'dagger.png'}/>
  }

  const nav = useNavigate();
  const navigationToCreatePage = () => {
    nav("/");
  };

  const deleteAccount = () => {
    localStorage.clear()
    navigationToCreatePage()
  }


  useEffect(()=>{
    if(getHabitsList() == null) setHabitsList([])
  }, [])
  
  useEffect(()=>{
    if(getTodoList() == null) setTodoList([])
  }, [])

  useEffect(()=>{
    if(getRewardsList() == null) setRewardsList([])
  }, [])

  return (
    <div className="UserHUD">
      <div className="UserHUD_AvatarSection">
        <div className="UserHUD_AvatarWrapper">
          <img
            src={require(`../../../assests/images/characters/${getUser().avatar}`)}
            alt=""
          />
        </div>
        <div className="UserHUD_UserInfo">
        <span className="UserHUD_Name">{getUser().name} {classIcon()}</span>
        <span className="UserHUD_Level">Lv {getUser().level}</span>
        <span className="UserHUD_Xp">{getUser().xp}/{getUser().xpToUp}</span>
        </div>
      </div>
      <hr />
      <button onClick={deleteAccount}>Delete account</button>
      <GoldView />
    </div>
  );
}

export default UserHUD;
