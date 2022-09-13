import { addGameApi, getGamesApi } from "../apis/gameAPI";

export const SHOW_GAME = 'SHOW_GAME'
export const ADD_GAME = 'ADD_GAME'


//action show
export function showGame(game){
    return{
        type: SHOW_GAME,
        payload: game,
    }
}


//thunk show

export function fetchGames() {
    return (dispatch) => {
        return getGamesApi()
        .then((game) => {
            dispatch(showGame(game))
        })
    }

}

//action add

export function addGame(data) {
    return {
        type: ADD_GAME,
        payload: data,
    }
}

//thunk add

export function fetchAddGame(data) {
    return (dispatch) => {
        console.log('Thunk add', data)
        return addGameApi(data)
        .then((game) => {
            dispatch(addGame(game))
        })
    }
}