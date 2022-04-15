import React, { useState } from "react";
import Title from "../util/Title/Title";
import "./style.css";
import GoldView from "../util/GoldView/GoldView";
import RewardsModal from "./RewardsModal/RewardsModal";

function Rewards() {
  const [goldViewState, SetGoldViewState] = useState(<GoldView />);
  const [isRewardsModalVisible, SetIsRewardsModalVisible] = useState(true)


  const handleRewardsModal = () => {
    isRewardsModalVisible ? SetIsRewardsModalVisible(false) : SetIsRewardsModalVisible(true);
  }

  return (
    <div className="Rewards">
      {isRewardsModalVisible ? <RewardsModal/> : null}
      <button className="addReward"> + </button>
      <Title titulo={"Rewards"} />
      <div className="Rewards_Container">{goldViewState}</div>
    </div>
  );
}

export default Rewards;
