const btn = document.querySelector('#getText')
const users = document.querySelector('#getUsers')
const posts = document.querySelector('#getPosts')
const form = document.querySelector('#addPost')

btn.addEventListener('click', getText)
users.addEventListener('click',getUsers)
posts.addEventListener('click',getPosts)
form.addEventListener('submit',addPost)

function getText(){
    fetch('sample.txt').then(function(res){
        return res.text()
    }).then(function(data){
        document.getElementById("output").textContent = data
    })
}

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2> Users </h2>'
        data.forEach(function(user){
        output += `<ul>
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
                </ul>`
        });
        document.getElementById('output').innerHTML = output
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>'
        data.forEach(function(post){
        output += `<div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                   </div>`
        });
        document.getElementById('output').innerHTML = output
    })
}

function addPost(e){
    e.preventDefault()

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Accept':'application/json, text/plain */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title,body:body})
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        document.getElementById('check').textContent = output
}