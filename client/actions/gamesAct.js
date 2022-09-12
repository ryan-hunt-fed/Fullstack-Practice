import { getGamesApi } from "../apis/gameAPI";

export const SHOW_GAME = 'SHOW_GAME'


//action
export function showGame(game){
    return{
        type: SHOW_GAME,
        payload: game,
    }
}


//thunk

export function fetchGames() {
    return (dispatch) => {
        return getGamesApi()
        .then((game) => {
            dispatch(showGame(game))
        })
    }

}