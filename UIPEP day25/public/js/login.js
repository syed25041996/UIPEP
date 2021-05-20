const form = document.getElementById('login')
form.addEventListener('submit',loginUser)

async function loginUser(e){
    e.preventDefault()
    const fullname = document.getElementById('fullname').value
    const password = document.getElementById('password').value

    const result = await fetch('/login',{
        method : 'POST',
        headers : {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({fullname,password})
    }).then((res) => res.json())

    if(result.status === 'ok'){
        alert("Token generated for the client is: " + result.data)
    }else{
        alert(result.error)
    }
}

