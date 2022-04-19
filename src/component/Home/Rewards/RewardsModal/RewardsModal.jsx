import React, { useState } from 'react';
import RewardsRadio from '../RewardsUtil/RewardsRadio';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import { getRewardsList, setRewardsList } from '../../../../LocalStorage/rewardsList';

function RewardsModal(props) {
    const [rewardName, SetRewardName] = useState('')
    const [rewardTime, SetRewardTime] = useState(0)
    const [rewardCost, SetRewardCost] = useState(100)
    const [rewardNameError, SetRewardNameError] = useState(false)

    const handleRewardName = (name) => {
        let auxName = name.target.value;
        if(auxName.length <= 17) return SetRewardName(auxName)
    }

    const handleRewardNameError = () => {
        if(rewardName.length === 0) {
            SetRewardNameError(true)
            return true
        } 
        SetRewardNameError(false)
        return false
    }

    const handleRewardTime = (time) => {
        SetRewardTime(time)
        if(time == 15) return SetRewardCost(100)
        if(time == 30) return SetRewardCost(200)
        if(time == 60) return SetRewardCost(300)
        if(time == 0) return SetRewardCost(100)
    }

    const handleRewardCost = (cost) => {
        let auxCost = cost.target.value;
        if(auxCost.length <= 3) return SetRewardCost(auxCost)
    }


    const getId = () => {
        if (getRewardsList().length === 0) {
            return 0;
        }
        const id = getRewardsList()[getRewardsList().length - 1].id += 1;
        return id;
    }



    const addReward = () => {
        if (handleRewardNameError()) return null
        const reward = {name:rewardName, cost:rewardCost, time:rewardTime, id:getId()};
        console.log(getId())
        const auxRewardList = getRewardsList();
        auxRewardList.push(reward)
        setRewardsList(auxRewardList)
    }




    return (
        <div id='RewardsModal' className='RewardsModal' onClick={(e)=>{
            if(e.target.id === 'RewardsModal') props.onClose()
        }}>
            <div className='RewardsModal_Container'>
                <span onClick={()=>{props.onClose()}} className="RewardsModal_Close">x</span>
                <form action="">
                    <h2>Nova recompensa</h2>
                    <form action="">
                        <label htmlFor="rewardName">Nome</label>
                        <input onChange={(name)=> {
                            handleRewardName(name)
                        }} type="text" autoComplete='off' value={rewardName} id='rewardName'/>
                        {rewardNameError ? <span className='rewardNameError'>Digite o nome da recompensa</span> : null}
                        <RewardsRadio handleRewardTime={handleRewardTime} time={'15'}/>
                        <RewardsRadio handleRewardTime={handleRewardTime} time={'30'}/>
                        <RewardsRadio handleRewardTime={handleRewardTime} time={'60'}/>
                        <span className='RewardsRadio'>
                            <input onClick={()=>(
                                handleRewardTime(0)
                            )} defaultChecked id='radioNoTime' type="radio" name='timeRadio' />  
                            <label htmlFor='radioNoTime'>Sem tempo</label>
                        </span>
                        <span className='RewardsCost'>
                            <label htmlFor="rewardsCost"><FontAwesomeIcon icon={faCoins} /></label>
                            <input onChange={(cost)=>{
                                handleRewardCost(cost);
                            }} type="number" value={rewardCost} id='rewardsCost' />
                        </span>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            addReward()
                            props.onClose()
                        }} type='submit'>Criar</button>
                    </form>
                </form>
            </div>
        </div> 
     );
}

export default RewardsModal;