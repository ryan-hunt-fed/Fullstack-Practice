import request from 'superagent'

export function getGamesApi() {
    return request.get('/v1/games/')
    .then((resp) => {
        return resp.body
    })
}

// export async function getGamesApi() {
//     const resp = await request.get('/v1/games')
//     console.log(resp.body)
//     return resp.body

// }

// export async function addGameApi(data) {
//     const req = await request.post('/v1/games').send(data)
//     return req.body
//   }

  export function addGameApi(data) {
    return request.post('/v1/games').send(data)
    .then((resp) => {
        return resp.body
    })
  }

