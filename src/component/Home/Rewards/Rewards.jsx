import React, { useState } from "react";
import Title from "../util/Title/Title";
import "./style.css";
import GoldView from "../util/GoldView/GoldView";
import RewardsModal from "./RewardsModal/RewardsModal";
import RewardsItem from "./RewardsItem/RewardsItem";
import { getRewardsList } from "../../../LocalStorage/rewardsList";

function Rewards() {
  const [goldViewState, SetGoldViewState] = useState(<GoldView />);
  const [isRewardsModalVisible, SetIsRewardsModalVisible] = useState(false);
  const [rewardListState, SetRewardListState] = useState(getRewardsList());

  const handleRewardsModal = () => {
    isRewardsModalVisible
      ? SetIsRewardsModalVisible(false)
      : SetIsRewardsModalVisible(true);
  };

  return (
    <div className="Rewards">
      {isRewardsModalVisible ? (
        <RewardsModal
          setRewardListState={SetRewardListState}
          onClose={handleRewardsModal}
        />
      ) : null}
      <button onClick={handleRewardsModal} className="addReward">
        {" "}
        +{" "}
      </button>
      <Title titulo={"Rewards"} />
      <ul className="Rewards_Container">
        {rewardListState.map((reward) => {
          return (
            <RewardsItem
              rewardName={reward.name}
              rewardTime={reward.time}
              rewardCost={reward.cost}
              rewardId={reward.id}
              setRewardListState={SetRewardListState}
              setGoldView={SetGoldViewState}
            />
          );
        })}
      </ul>
      {goldViewState}
    </div>
  );
}

export default Rewards;
