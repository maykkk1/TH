import React from 'react';
import "./style.css"

const CreateCharModal = () => {
    const sprites = ['./sprites/sprite_1.png', './sprites/sprite_2.png', './sprites/sprite_.png']
    return(
        <div className='CreateCharModal'>
            <div className='CreateCharModal_Container'>
                <div className='CreateCharModal_ImgWrapper'>
                    <img src={require(sprites[1])} alt="" />
                </div>
            </div>
        </div>
    )
}
export default CreateCharModal;