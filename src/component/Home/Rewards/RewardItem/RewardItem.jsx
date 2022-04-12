import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import GoldView from "../../util/GoldView/GoldView";
import {setUser, getUser} from "../../../../LocalStorage/user";


function RewardItem(props) {

  const buyReward = () => {
    const auxUser = getUser()
    if(auxUser['gold'] >= props.rewardGoldCost){
      auxUser['gold']-= props.rewardGoldCost
      setUser(auxUser)
      props.rerenderGoldView(<GoldView />)
      console.log('Funcionei')
    }
  }


  return (
    <div onClick={()=>{buyReward()}} className="Reward_Item">
      <h2>{props.rewardTitle}<br />{props.rewardTime}</h2>
      <div className="Reward_ImgWrapper">
        <img
          src={props.rewardImgUrl}
          alt=""
        />
      </div>
      <div className="Reward_Value">
        <FontAwesomeIcon icon={faCoins} />
        <p>{props.rewardGoldCost}</p>
      </div>
    </div>
  );
}

export default RewardItem;
