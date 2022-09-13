import request from 'superagent'


//show game
export function getGamesApi() {
    return request.get('/v1/games/')
    .then((resp) => {
        return resp.body
    })
}

// add game
  export function addGameApi(data) {
    return request.post('/v1/games/').send(data)
    .then((resp) => {
        return resp.body
    })
  }

  // delete game 
  export function delGameApi(id) {
    return request.delete('/v1/games/' + id)
    .then((resp) => {
      console.log('Client Api',resp.body)
      return resp.body
    })
  }


//async practice/trials
// export async function getGamesApi() {
//     const resp = await request.get('/v1/games')
//     console.log(resp.body)
//     return resp.body

// }

// export async function addGameApi(data) {
//     const req = await request.post('/v1/games').send(data)
//     return req.body
//   }