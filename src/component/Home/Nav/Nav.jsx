import React from "react";
import ToDo from "../ToDo/ToDo";
import Habits from "../Habits/Habits"
import UserHUD from "../UserHUD/userHUD";
import "./style.css";
import Rewards from "../Rewards/Rewards";

function Nav(props) {
  return (
    <div className="Nav_Nav">
      <button
        onClick={() => {
          props.setComponent(<UserHUD />);
        }}
      >
        Profile
      </button>
      <button
        onClick={() => {
          props.setComponent(<ToDo />);
        }}
      >
        To-do
      </button>
      <button
        onClick={() => {
          props.setComponent(<Habits />);
        }}
      >
        Habits
      </button>
      <button
        onClick={() => {
          props.setComponent(<Rewards />);
        }}
      >
        Rewards
      </button>
    </div>
  );
}

export default Nav;
