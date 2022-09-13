import { SHOW_GAME, ADD_GAME, DEL_GAME } from "../actions/gamesAct";

const initalState = []

const gamesRedu = (state = initalState, action) => {
    const { type, payload } = action
    switch(type) {
        case SHOW_GAME:
            return  payload
        case ADD_GAME:
            return [...state, payload]
        case DEL_GAME:
            return state.filter((game) => !game.id === payload.id)
        default:
            return state
    }

}

export default gamesRedu