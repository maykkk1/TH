import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";


function RewardsItem(props) {
    return ( 
        <li className='RewardItem'>
         <h3 className='RewardItem__name'>{props.rewardName}</h3>
         <span className='RewardItem__deleteItem'>x</span>
         {props.rewardTime == 0
         ? <span className='RewardItem__time'>{`Unico`}</span>
         : <span className='RewardItem__time'>{`${props.rewardTime}:00 min`}</span>
        }
         <button className='RewardItem__buyItem'>Comprar</button>
         <span className='RewardItem__itemCost'><FontAwesomeIcon icon={faCoins} /><p>{props.rewardCost}</p></span>
        </li>
     );
}

export default RewardsItem;