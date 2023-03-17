let userInput = document.querySelector('#new_task');
let list = document.querySelector('#incomplete-tasks');
let addTask = document.querySelector('#add_button');
let deleteTask = document.querySelector('#delete-button')

let todoList = [];

function addItem (elements) {
   list.innerHTML = "";
   elements.forEach(e => {
      let newEl = document.createElement('li');
      newEl.innerHTML = e;
      newEl.classList.add('list-group-items');
      list.appendChild(newEl);
   });
}

addTask.addEventListener('click', e =>{
   if (userInput.value !== "") {
      todoList.push(userInput.value);
      userInput.value = "";
      addItem(todoList);
      deleteTask.style.display = 'block';
      localStorage.setItem('mylist', JSON.stringify(taskList))
   }else{
      alert('please input your task');
   }
});

let saved = localStorage.getItem('mylist');
if (saved) {
   todoList = JSON.parse(localStorage.getItem("mylist"));
   addItem(todoList);
 } else {
   deleteTask.style.display = "none";
 }

deleteTask.addEventListener('click', function() {
   localStorage.clear();
   list.innerHTML = "";
   todoList = [];
   deleteTask.style.display = "none";
 });