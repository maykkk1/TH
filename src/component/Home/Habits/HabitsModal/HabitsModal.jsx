import "./style.css";
import React, { useState } from "react";
import { getHabitsList, setHabitsList } from "../../../../LocalStorage/habitsList";

function HabitsModal(props) {
    const [habitText, SetHabitText] = useState('')

    const handleHabitText = (e) => {
        let tempText = e.target.value
        if(tempText.length <= 18){
            SetHabitText(tempText)
        }
    }

    const getId = () => {
        if (getHabitsList().length > 0) {
          return getHabitsList()[getHabitsList().length - 1].id + 1;
        } else {
          return 0;
        }
      };

    const addHabit = (e) => {
        const id = getId()
        e.preventDefault()
        const habit = {content:habitText, id:id}
        const auxHabitList = getHabitsList()
        auxHabitList.push(habit)
        setHabitsList(auxHabitList)
        props.SetHabitsListState(getHabitsList())
        props.onClose()
    }


  return (
    <div className="HabitsModal">
      <div className="HabitsModal_Container">
        <span className="HabitsModal_Close" onClick={()=>{props.onClose()}}>x</span>
        <form>
          <label htmlFor="HabitsModal_Habits">Habit</label>
          <input autoComplete="off" value={habitText} onChange={(e)=>{handleHabitText(e)}}/>
          <button onClick={(e)=>(addHabit(e))}>Create</button>
        </form>
      </div>
    </div>
  );
}

export default HabitsModal;
