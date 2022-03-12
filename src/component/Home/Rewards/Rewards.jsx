import React from "react";
import Title from "../util/Title/Title";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

function Rewards() {
  return (
    <div className="Rewards">
      <Title titulo={"Rewards"} />
      <div className="Rewards_Container">
        <div className="Reward_Item">
          <h2>
            Play Video Games <br /> (30min)
          </h2>
          <div className="Reward_ImgWrapper">
            <img
              src="https://opengameart.org/sites/default/files/psControllerColored.png"
              alt=""
            />
          </div>
          <div className="Reward_Value">
            <FontAwesomeIcon icon={faCoins} /> 
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
