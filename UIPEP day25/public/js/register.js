const form = document.getElementById('register')
form.addEventListener('submit',registerUser)

async function registerUser(e){
    e.preventDefault()
    const fullname = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const result = await fetch('/register',{
        method : 'POST',
        headers : {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({fullname,email,password}),
        redirect: "follow"
    }).then((res) => res.json())

    if(result.status === 'ok'){
        alert("Success")
    }else{
        alert(result.error)
    }
}

