function LevelUp(user, xp, gold) {
    const auxUser = user;
    auxUser['xp']+= xp
    auxUser['gold']+= gold
    if(auxUser.xp >= auxUser.xpToUp){
        auxUser['xp'] =  auxUser.xp - auxUser.xpToUp
        auxUser['xpToUp']+=75
        auxUser['level'] = auxUser.level+=1
    }
    return auxUser
}

export default LevelUp;
