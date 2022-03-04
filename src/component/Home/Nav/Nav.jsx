import React from "react";
import ToDo from "../ToDo/ToDo";
import UserHUD from "../UserHUD/userHUD";
import "./style.css";

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
          props.setComponent(<UserHUD />);
        }}
      >
        Habits
      </button>
      <button
        onClick={() => {
          props.setComponent(<UserHUD />);
        }}
      >
        Rewards
      </button>
    </div>
  );
}

export default Nav;
