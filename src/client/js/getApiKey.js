const fetch= require('node-fetch')
function getApiKey(){
    return fetch('http://localhost:8081/key')
    .then(res => res.json())
}

export { getApiKey }
