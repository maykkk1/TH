import React, { useState } from "react";
import Title from "../util/Title/Title";
import "./style.css";
import GoldView from "../util/GoldView/GoldView";
import RewardsModal from "./RewardsModal/RewardsModal";

function Rewards() {
  const [goldViewState] = useState(<GoldView />);
  const [isRewardsModalVisible, SetIsRewardsModalVisible] = useState(false)


  const handleRewardsModal = () => {
    isRewardsModalVisible ? SetIsRewardsModalVisible(false) : SetIsRewardsModalVisible(true);
  }

  return (
    <div className="Rewards">
      {isRewardsModalVisible ? <RewardsModal onClose={handleRewardsModal}/> : null}
      <button onClick={handleRewardsModal} className="addReward"> + </button>
      <Title titulo={"Rewards"} />
      <div className="Rewards_Container">{goldViewState}</div>
    </div>
  );
}

export default Rewards;
