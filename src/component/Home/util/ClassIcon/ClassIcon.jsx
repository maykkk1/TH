import React, { useState } from 'react';
import "./style.css"

function ClassIcon(props) {
    const [isClassHoverVisible, SetIsClassHoverVisible] = useState(false)


    const handleClassHover = () => {
        isClassHoverVisible ? SetIsClassHoverVisible(false) : SetIsClassHoverVisible(true);
    }

    return ( 
        <div onMouseEnter={handleClassHover} onMouseLeave={handleClassHover} className='ClassIcon'>
            <img src={require(`../../../../assests/images/icons/${props.selectedClass}`)} alt="" />
            {isClassHoverVisible ? <span>{props.selectedClassName}</span> : null}
        </div>
     );
}

export default ClassIcon;