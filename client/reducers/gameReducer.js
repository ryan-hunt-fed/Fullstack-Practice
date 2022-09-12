import { SHOW_GAME } from "../actions/gamesAct";

const initalState = []

const gamesRedu = (state = initalState, action) => {
    const { type, payload } = action
    switch(type) {
        case SHOW_GAME:
            return  payload

        default:
            return state
    }

}

export default gamesRedu