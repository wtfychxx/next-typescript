import { Http } from '../../lib'
const http = new Http('http://127.0.0.1:70/api')

type Data = {
    name: string
    param: Object,
    sessionId: string,
    timestamp: number,
    securityCode: string,
    language_id: number,
    result: Object
}

export default async function getCombo(
    type: string,
    id: number
) {
    const obj = {
        type: type,
        parent: id,
        isarray: true
    }

    const res: any = await http.post('/getCombo', obj);

    return res.result;
}