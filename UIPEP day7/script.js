console.log(document.querySelector("textarea").textContent)
const newpara = document.querySelector('p')
document.querySelector('#button').addEventListener('click', onClick)


function onClick(){
    const para = document.createElement("p");
    const texts = document.querySelector("textarea").value
    para.appendChild(document.createTextNode(texts))
    document.querySelector('p').appendChild(para)
}



