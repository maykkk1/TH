import React from 'react';
import RewardsRadio from '../RewardsUtil/RewardsRadio';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import './style.css'

function RewardsModal(props) {
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
                        <input type="text" id='rewardName'/>
                        <RewardsRadio time={'15'}/>
                        <RewardsRadio time={'30'}/>
                        <RewardsRadio time={'60'}/>
                        <span className='RewardsRadio'>
                            <input id='radioNoTime' type="radio" name='timeRadio' />  
                            <label htmlFor='radioNoTime'>Sem tempo</label>
                        </span>
                        <span className='RewardsCost'>
                            <label htmlFor="rewardsCost"><FontAwesomeIcon icon={faCoins} /></label>
                            <input type="number" value={0} id='rewardsCost' />
                        </span>
                        <button type='submit'>Criar</button>
                    </form>
                </form>
            </div>
        </div> 
     );
}

export default RewardsModal;