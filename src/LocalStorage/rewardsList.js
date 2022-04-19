export const setRewardsList = (rewards) => {
    localStorage.setItem('rewards', JSON.stringify(rewards))
}

export const getRewardsList = () => {
    const rewards = JSON.parse(localStorage.getItem('rewards'))
    return rewards;
}

export default {getRewardsList, setRewardsList}