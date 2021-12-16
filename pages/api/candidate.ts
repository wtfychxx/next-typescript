import { Http } from '../../lib'
const http = new Http('http://127.0.0.1:3210/api')

export function saveCandidate(data: {}){
    console.log(JSON.stringify(data))
    return
    const res = http.post('/candidate', JSON.stringify(data))

    return res
}