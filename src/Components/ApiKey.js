import md5 from 'js-md5'

/* Função para gera o hash para chamar a API Marvel */

function apiKey(){
    let apikey
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + process.env.REACT_APP_MARVEL_PRIVATE_API_KEY + process.env.REACT_APP_MARVEL_PUBLIC_API_KEY)
    apikey = `ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=${hash.hex()}`
    return apikey
}

export default apiKey;