import {getApiKey} from './getApiKey'
function handleSubmit(event) {
    event.preventDefault()
    let nameForm= document.getElementById('name')
    let commentForm= document.getElementById('comment')
    if(nameForm.value !== '' && commentForm.value !== ''){

        // check what text was put into the form field
        let name = nameForm.value
        Client.checkForName(name)
    
    
        let comment= commentForm.value
        getApiKey()
        .then(res => {
            const formdata= new FormData();
            formdata.append('key',res.apiKey)
            formdata.append('txt', comment)
            formdata.append('lang','en')
            return formdata
        })
        .then(formdata =>{
            const requestOptions= {
                method:'POST',
                body:formdata,
                redirect:'follow'
            }
            return requestOptions
        })
        .then(requestOptions => fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions))
        .then(res => res.json())
        .then(res => {
            document.getElementById('results').textContent=`Hello ${name}, Your comment is ${res.subjectivity}`
        })
        .catch(error => console.log(error))
        return 'success'
        
    }else{
        alert('please fill both forms ')
        return 'failed'
    }

    }

export { handleSubmit }
