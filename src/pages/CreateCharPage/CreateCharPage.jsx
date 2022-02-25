import React from 'react';
import "./style.css"


const CreateCharPage = () => {
    return(
        <div className='CreateCharPage'>
            <div className='CreateCharPage_panel'>
                <h1 className='CreateCharPage_Title'>Game With Life</h1>
                <h2 className='CreateCharPage_Title2'>Escolha seu avatar</h2>
                <div className='CreateCharPage_avatarWrapper'></div>
                <form className='CreateCharPage_Form' action="">
                    <label htmlFor="name" >Nome</label>
                    <input autocomplete="false"  type="text" id="name"/>
                    <button type='submit'>Criar</button>
                </form>
            </div>
        </div>
    )
}


export default CreateCharPage;