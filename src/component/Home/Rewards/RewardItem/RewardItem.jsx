import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../../../Hooks/useUser"
import GoldView from "../../util/GoldView/GoldView";

function RewardItem(props) {
  const {user, setUser} = useUser()

  const buyReward = () => {
    const auxUser = user
    if(auxUser['gold'] >= props.rewardGoldCost){
      auxUser['gold']-= props.rewardGoldCost
      setUser(auxUser)
      props.rerenderGoldView(<GoldView />)
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
