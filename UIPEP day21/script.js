// const socket = io()
// const messageContainer = document.getElementById('messages')
// const messageForm = document.getElementById('send')
// const messageInput = document.getElementById('messageBox')

// const names = prompt('What is your name?')
// appendMessage('You joined')
// socket.emit('new-user', names)

// socket.on('chat-message', data => {
//   appendMessage(`${data.name}: ${data.message}`)
// })

// socket.on('user-connected', name => {
//   appendMessage(`${name} connected`)
// })

// socket.on('user-disconnected', name => {
//   appendMessage(`${name} disconnected`)
// })

// messageForm.addEventListener('submit', e => {
//   e.preventDefault()
//   const message = messageInput.value
//   appendMessage(`You: ${message}`)
//   socket.emit('send-chat-message', message)
//   messageInput.value = ''
// })

// function appendMessage(message) {
//   const messageElement = document.createElement('div')
//   messageElement.innerText = message
//   messageContainer.append(messageElement)
// }

function callIt() {
  const sendBtn = document.querySelector('#send');
  const messages = document.querySelector('#messages');
  const messageBox = document.querySelector('#messageBox');
  const names = prompt('What is your name?')
  let ws;

  function showMessage(message) 
  {
    messages.textContent += `\n\n${names}:  ${message}`;
    messages.scrollTop = messages.scrollHeight;
    messageBox.value = '';
  }

function init() {
    if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
    }

    ws = new WebSocket('ws://localhost:3000');
    ws.onopen = () => {
        console.log('Connection opened!');
    }
    
    ws.onmessage = ({data}) => showMessage(data); 
    
    ws.onclose = function() {
        ws = null;
    }
} 

  sendBtn.onclick = function() {
  if (!ws) {
      showMessage("No WebSocket connection :(");
      return ;
  }

    ws.send(messageBox.value, names);
    showMessage(messageBox.value);
  }

  init();
}

callIt()