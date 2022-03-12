import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../../../Hooks/useUser"

function RewardItem(props) {
  const {user, SetUser} = useUser()

  const buyReward = () => {
    const auxUser = user
    auxUser['gold']-= props.rewardGoldCost
    SetUser(auxUser)
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
