import React, { useState } from "react";
import Title from "../util/Title/Title";
import "./style.css";
import RewardItem from "./RewardItem/RewardItem";
import GoldView from "../util/GoldView/GoldView"
import RewardsList from "../../../services/RewardsList";

function Rewards() {
  const [goldViewState, SetGoldViewState] = useState(<GoldView />) 
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
              rerenderGoldView={SetGoldViewState}
            />
          );
        })}
        {goldViewState}
      </div>
    </div>
  );
}

export default Rewards;
