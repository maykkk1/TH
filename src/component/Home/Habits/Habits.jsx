import React, { useEffect } from "react";
import { useState } from "react";
import HabitsModal from "./HabitsModal/HabitsModal";
import "./style.css";
import Habit_Item from "./habit_Item/Habit_Item";
import Title from "../util/Title/Title";
import { getHabitsList, setHabitsList } from "../../../LocalStorage/habitsList";

function Habits() {
  const [isHabitModalVisible, SetIsHabitModalVisible] = useState(false);
  const [habitsListState, SetHabitsListState] = useState(getHabitsList());

  const handleModal = () => {
    isHabitModalVisible
      ? SetIsHabitModalVisible(false)
      : SetIsHabitModalVisible(true);
  };


  return (
    <div className="Habits">
      {isHabitModalVisible ? (
        <HabitsModal
          SetHabitsListState={SetHabitsListState}
          onClose={handleModal}
        />
      ) : null}
      <button onClick={handleModal} className="AddHabit">
        +
      </button>
      <Title titulo={"Habits"} />
      <ul className="HabitsList">
        {habitsListState.map((element) => {
          return (
            <Habit_Item
              SetHabitsListState={SetHabitsListState}
              key={element.id}
              habitText={element.content}
              keyId={element.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Habits;
