import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons"
import { getRewardsList, setRewardsList } from '../../../../LocalStorage/rewardsList';
import { getUser, setUser } from '../../../../LocalStorage/user';
import GoldView from '../../util/GoldView/GoldView';


function RewardsItem(props) {


    const deleteReward = (e) => {
        let id = parseInt(e.target.id.replace(/\D/g,'')) 
        const auxRewardList = getRewardsList().filter((reward)=>{
            return reward.id !== id; 
        })
        setRewardsList(auxRewardList)
        props.setRewardListState(getRewardsList())
    }

    const buyReward = () => {
        const auxUser = getUser()
        if(props.rewardCost > auxUser.gold) return null
        auxUser.gold -= props.rewardCost
        setUser(auxUser)
        props.setGoldView(<GoldView/>)
    }

    return ( 
        <li className='RewardItem'>
         <h3 className='RewardItem__name'>{props.rewardName}</h3>
         <span id={`reward_${props.rewardId}`} onClick={deleteReward} className='RewardItem__deleteItem'>x</span>
         {props.rewardTime == 0
         ? <span className='RewardItem__time'>{`Unico`}</span>
         : <span className='RewardItem__time'>{`${props.rewardTime}:00 min`}</span>
        }
         <button onClick={buyReward} className='RewardItem__buyItem'>Comprar</button>
         <span className='RewardItem__itemCost'><FontAwesomeIcon icon={faCoins} /><p>{props.rewardCost}</p></span>
        </li>
     );
}

export default RewardsItem;