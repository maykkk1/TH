import React from "react";
import Title from "../util/Title/Title";
import "./style.css";
import RewardItem from "./RewardItem/RewardItem";
import RewardsList from "../../../services/RewardsList";

function Rewards() {
  return (
    <div className="Rewards">
      <Title titulo={"Rewards"} />
      <div className="Rewards_Container">
        {RewardsList.map((element) => {
          return (
            <RewardItem
              rewardTitle={element.rewardTitle}
              rewardTime={element.rewardTime}
              rewardImgUrl={element.rewardImgUrl}
              rewardGoldCost={element.rewardGoldCost}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rewards;
