import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import LevelUp from "../../../../services/LevelUp";
import { setUser, getUser } from "../../../../LocalStorage/user";
import {getHabitsList, setHabitsList} from "../../../../LocalStorage/habitsList"

function Habit_Item(props) {

  const habitDone = () => {
    setUser(LevelUp(getUser(), 50 * getUser().xpBonus, 20 * getUser().goldBonus))
  };

  const deteleHabit = (e) => {
    let id = parseInt(e.target.id.replace(/\D/g,'')) 
    const auxList = getHabitsList().filter((habit)=>{
        return habit.id !== id; 
    })
    setHabitsList(auxList)
    props.SetHabitsListState(getHabitsList())
  };

  return (
    <li className="habit_Item">
      <p>{props.habitText}</p>
      <div className="habit_Item_buttons">
        <button
          onClick={() => {habitDone();}}className="habit_Item_check"><FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="habit_Item_delete" >
          <FontAwesomeIcon icon={faXmark} />
          <span className="habit_Item_deleteHabitWrapped" id={`habit_${props.keyId}`} onClick={(e) => {deteleHabit(e);}}></span>
        </button>
      </div>
    </li>
  );
}

export default Habit_Item;
