let number = Math.trunc(Math.random() * 20) + 1
console.log(number)
document.querySelector('.number').value = number
let score = 20;
let highscore = 0

const display = (message) =>{
    document.querySelector('.message').textContent =  message
    document.querySelector('.score').textContent =  parseInt(score)
}

document.querySelector('.check').addEventListener('click',Guess)

function Guess(){
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
        display("🎁 Please type in a number",score)
    }
    else if(guess !== number){
        if(score > 1){
            display(guess > number ? '🚀 Too High' : '☄ Too low')
            score--
            document.querySelector('.score').textContent = score
        }else{
            display("💥 Game over", score)
            document.querySelector('.score').textContent = 0
        }

    }
    else{
            display("😄 Correct guess")
            document.querySelector('.score').textContent = score
            document.querySelector('body').style.backgroundColor = "#60b347"
            if(score > highscore){
                highscore = score
                document.querySelector('.highscore').textContent = highscore
            }
    }
}

document.querySelector('.again').addEventListener('click',Reset)

function Reset(){
    score = 20
    number = Math.trunc(Math.random() * 20) + 1
    display("Start guessing...",score)
    // document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ""
    document.querySelector('body').style.backgroundColor = '#222'
}