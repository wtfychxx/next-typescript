import { Http } from '../../lib'
const http = new Http('http://localhost:3210')

export default async function getCombo(
    type: string,
    id: number = 0
) {

    const res: any = await http.get(`/api/getCombo/${type}/${id}`)

    return res
}