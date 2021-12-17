import { Http } from '../../lib'
const http = new Http('http://127.0.0.1:3210/api')

interface response{
    status: string,
    message: string
}

export function saveCandidate(data: {}){
    const res: any = http.post('/candidate', JSON.stringify(data))

    return res
}