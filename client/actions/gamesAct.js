import { addGameApi, getGamesApi, delGameApi } from "../apis/gameAPI";

export const SHOW_GAME = 'SHOW_GAME'
export const ADD_GAME = 'ADD_GAME'
export const DEL_GAME = 'DEL_GAME'


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

//action delete

export function delGame(id) {
    return {
        type: DEL_GAME,
        payload: id,
    }
}

//thunk delete

export function fetchDelGame(id) {
    return (dispatch) => {
        return delGameApi(id)
        .then(() => {
            dispatch(delGame(id))
        })
    }
}