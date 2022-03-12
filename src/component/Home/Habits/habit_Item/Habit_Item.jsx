import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../../../Hooks/useUser";
import useHabitsList from '../../../../Hooks/useHabitsList'
import LevelUp from "../../../../services/LevelUp";

function Habit_Item(props) {
  const { user, setUser } = useUser();
  const {habitsList, SetHabitsList} = useHabitsList()

  const habitDone = () => {
    setUser(LevelUp(user, 25, 10));
  };

  const deteleHabit = (e) => {
    let id = parseInt(e.target.id.replace(/\D/g,'')) 
    const auxList = habitsList.filter((habit)=>{
        return habit.id !== id; 
    })
    SetHabitsList(auxList)
    console.log(id)
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
