import axios from 'axios'

const RES = { data: new Object() }

interface http{
    get(url: string): void
    post(url: string, param: Object): void
}

const http = function(this: any, url: any=null){
    this.base = url;
    this.combineurl = (url: string) => {
        if(this.base === null){
            return url
        }else{
            return (`${this.base}${url}`)
        }
    }

    this.wreturn = (res = RES) => {
        return res.data
    }
} as any as { new (url: any): http }

http.prototype.get = async function(url: string){
    const newurl = this.combineurl(url)
    const res = await axios.get(newurl)
    return this.wreturn(res)
}

http.prototype.post = async function(url: string, param: Object){
    const newurl = this.combineurl(url)
    const res = await axios.post(newurl, param)
    return this.wreturn(res)
}

http.prototype.put = async function(url: string, param: Object){
    const newurl = this.combineurl(url)
    const res = await axios.put(newurl, param)
    return this.wreturn(res)
}

http.prototype.delete = async function(url: string, param: Object){
    const newurl = this.combineurl(url)
    const res = await axios({
        method: 'DELETE',
        url: newurl,
        data: param
    })
    return this.wreturn(res)
}

export default http;