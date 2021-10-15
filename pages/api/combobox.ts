import { Http } from '../../lib'
const http = new Http('http://127.0.0.1:70/api')

export default async function getCombo(
    type: string,
    id: number
) {
    const obj = {
        type: type,
        parent: id,
        isarray: true
    }

    // const res: any = await http.post('/getCombo', obj)

    const res : any = {
        result: [
            {
                combo_key: 10,
                combo_name: 'Test'
            },
            {
                combo_key: 11,
                combo_name: 'Test2'
            }
        ]
    }

    return res.result
}