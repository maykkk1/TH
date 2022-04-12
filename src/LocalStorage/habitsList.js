export const setHabitsList = (habits) => {
    localStorage.setItem('habits', JSON.stringify(habits))
}

export const getHabitsList = () => {
    const habitsList = JSON.parse(localStorage.getItem('habits'))
    return habitsList;
}

export default {setHabitsList, getHabitsList};