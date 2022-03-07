import React from "react";
import { useState } from "react";
import HabitsModal from "./HabitsModal/HabitsModal";
import useHabitsList from "../../../Hooks/useHabitsList";
import "./style.css";
import Habit_Item from "./habit_Item/Habit_Item";

function Habits() {
    const [isHabitModalVisible, SetIsHabitModalVisible] = useState(false)
    const { habitsList } = useHabitsList() 

    const handleModal = () => {
      isHabitModalVisible ? SetIsHabitModalVisible(false) : SetIsHabitModalVisible(true)
    }

  return (
    <div className="Habits">
        {isHabitModalVisible ? <HabitsModal onClose={handleModal}/> : null}
        <button onClick={handleModal} className="AddHabit">+</button>
        <h2>Habits</h2>
        <ul className="HabitsList">
          {habitsList.map((element) => {
            return (
              <Habit_Item habitText={element.content}/>
            )
          })}
        </ul>
    </div>
  )
}

export default Habits;