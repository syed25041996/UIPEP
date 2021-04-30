// Declare variables

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let result = document.querySelector('#result')

// Give random options
let options = ['Rock', 'Paper', 'Scissors']
let i = Math.trunc(Math.random() * options.length)


// Add event listeners
rock.addEventListener('click', rocky)
function rocky(){
    
    if(options[i] === 'Paper'){
        result.innerHTML = "🤐 You lost, the opponent chose paper"
        document.body.classList.add('lose')
    }else if(options[i] === 'Rock'){
        result.innerHTML = "😅 Its a draw, the opponent chose rock too"
        document.body.classList.add('draw')
    }else{
        result.innerHTML = "😄 You won, the opponent chose scissors"
        document.body.classList.add('win')
    }
    setTimeout(() => result.remove(), 3000)
    setTimeout(() => {window.location.reload();}, 3000);
}


paper.addEventListener('click', papery)

function papery(){

    if(options[i] === 'Rock'){
        result.innerHTML = "😄 You won, the opponent chose rock"
        document.body.classList.add('win')
    }else if(options[i] === 'Paper'){
        result.innerHTML = "😅 Its a draw, the opponent chose paper too"
        document.body.classList.add('draw')
    }else{
        result.innerHTML = " 🤐 You lost, the opponent chose scissors"
        document.body.classList.add('lose')
    }
    setTimeout(() => result.remove(), 3000)
    setTimeout(() => {window.location.reload();}, 3000);
}


scissors.addEventListener('click', scissorsy)

function scissorsy(){

    if(options[i] === 'Rock'){
        result.innerHTML = "🤐 You lost, the opponent chose rock"
        document.body.classList.add('lose')
    }else if(options[i] === 'Paper'){
        result.innerHTML = "😄 You won, the opponent chose paper"
        document.body.classList.add('win')
    }else{
        result.innerHTML = "😅 Its a draw, the opponent chose scissors"
        document.body.classList.add('draw')
    }
    setTimeout(() => result.remove(), 3000)
    setTimeout(() => {window.location.reload();}, 3000);
}

