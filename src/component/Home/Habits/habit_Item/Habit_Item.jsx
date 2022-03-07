import  './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import useUser from '../../../../Hooks/useUser';
import LevelUp from '../../../../services/LevelUp';


function Habit_Item(props) {
    const {user, setUser} = useUser()

    const habitDone = () => {
        setUser(LevelUp(user, 25))
    }


    return ( 
        <li className='habit_Item'>
            <p>{props.habitText}</p>
            <div className='habit_Item_buttons'>
                <span onClick={()=>{habitDone()}} className='habit_Item_check'><FontAwesomeIcon icon={faCheck} /></span>
                <span className='habit_Item_delete'><FontAwesomeIcon icon={faXmark} /></span>
            </div>
        </li>
     );
}

export default Habit_Item;