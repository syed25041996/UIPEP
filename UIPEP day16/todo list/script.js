const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("Todo"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); //get object from a string
  }
  if(userEnteredValue === '' ){
    alert("Please enter a task")
  }else{
    listArray.push(userEnteredValue);
  } 
  localStorage.setItem("Todo", JSON.stringify(listArray)); 
  showTasks(); 
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("Todo", JSON.stringify(listArray));
  showTasks(); 
}

deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("Todo", JSON.stringify(listArray)); 
  showTasks(); 
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li style="border: 1px solid black">${element}<span class="icon" style="margin-left:60rem" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; //once task added leave the input field blank
}
