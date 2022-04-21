
export const storeUser = (name, avatar, classe, xp, gold) =>{
    localStorage.setItem('user', JSON.stringify(
        {
            name:name,
            avatar:avatar,
            classe:classe,
            level:1,
            xp:0,
            xpToUp:100,
            gold:0,
            goldBonus:gold,
            xpBonus:xp
        }
    ))
}

 export const getUser = () => {
     const user = JSON.parse(localStorage.getItem('user'))
     return user;
 }

export const setUser = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
}








export default {storeUser, getUser, setUser};