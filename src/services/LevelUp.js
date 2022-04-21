function LevelUp(user, xp, gold) {
    const auxUser = user;
    auxUser.xp+= xp
    auxUser.gold += gold
    if(auxUser.xp >= auxUser.xpToUp){
        auxUser['xp'] =  auxUser.xp - auxUser.xpToUp
        auxUser['xpToUp']+=75
        auxUser['level'] = auxUser.level+=1
    }
    auxUser.xp = parseInt(auxUser.xp) 
    auxUser.gold = parseInt(auxUser.gold)
    return auxUser
}

export default LevelUp;
