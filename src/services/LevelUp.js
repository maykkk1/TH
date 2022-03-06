function LevelUp(user, xp) {
    const auxUser = user;
    auxUser['xp']+= xp
    if(auxUser.xp >= auxUser.xpToUp){
        auxUser['xp'] =  auxUser.xp - auxUser.xpToUp
        auxUser['xpToUp']+=75
        auxUser['level'] = auxUser.level+=1
    }
    return auxUser
}

export default LevelUp;
