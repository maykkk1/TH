import "./style.css";
import React, { useState } from "react";
import useHabitsList from "../../../../Hooks/useHabitsList";

function HabitsModal(props) {
    const [habitText, SetHabitText] = useState('')
    const {habitsList, SetHabitsList} = useHabitsList()

    const handleHabitText = (e) => {
        let tempText = e.target.value
        if(tempText.length <= 18){
            SetHabitText(tempText)
        }
    }

    const getId = () => {
        if (habitsList.length > 0) {
          return habitsList[habitsList.length - 1].id + 1;
        } else {
          return 0;
        }
      };

    const addHabit = (e) => {
        const id = getId()
        e.preventDefault()
        const habit = {content:habitText, id:id}
        const auxHabitList = habitsList
        auxHabitList.push(habit)
        SetHabitsList(auxHabitList)
        props.onClose()
        console.log(habitsList)
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
