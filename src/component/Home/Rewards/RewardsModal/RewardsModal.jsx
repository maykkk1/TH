import React, { PureComponent } from 'react';
import RewardsRadio from '../RewardsUtil/RewardsRadio';
import './style.css'

function RewardsModal(props) {
    return (
        <div id='RewardsModal' className='RewardsModal' onClick={(e)=>{
            if(e.target.id === 'RewardsModal') props.onClose()
        }}>
            <div className='RewardsModal_Container'>
                <span onClick={()=>{props.onClose()}} className="RewardsModal_Close">x</span>
                <form action="">
                    <h2>Rewards</h2>
                    <form action="">
                        <label htmlFor="rewardName">Nome</label>
                        <input type="text" id='rewardName'/>
                        <RewardsRadio time={'15'}/>
                        <RewardsRadio time={'30'}/>
                        <RewardsRadio time={'60'}/>
                    </form>
                </form>
            </div>
        </div> 
     );
}

export default RewardsModal;