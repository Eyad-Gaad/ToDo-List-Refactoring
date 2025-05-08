// Task Input Regular Expression.
const taskExpression = /^(?!\s*$).{3,100}$/;

// Global Tasks Array;
let tasks = [];

// Initialization DOM and Events After DOMContentLoaded
document.addEventListener('DOMContentLoaded',()=>{
// HTML DOM Elements Variables.
const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const searchTaskWord = document.getElementById('searchTaskWord');
const taskErrorValidationMessage = document.getElementById('taskErrorValidationMessage');
const taskList = document.getElementById('taskList');

// Submition Event For Add Task.
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  addTask();
  
});

// Keyup Event For Search Task.
searchTaskWord.addEventListener('keyup',(e)=>{
  displayTasks(searchTaskWord.value);
});

// Click Event For Delete or Update Task
taskList.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-circle-check')||e.target.classList.contains('fa-pen')){
    const taskIndex = e.target.dataset.index;
    updateTask(taskIndex);
  }
  else if(e.target.classList.contains('fa-trash-can')){
    const taskIndex = e.target.dataset.index;
    deleteTask(taskIndex);
  }
})

// Display and Search Tasks Function (Invoked At Bootsrap Mode).
displayTasks();
});


// Add Task.
function addTask(){
  if(taskExpression.test(taskInput.value)){
    let task = {name:taskInput.value,done:false};
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
    if(taskErrorValidationMessage.classList.contains('block')){
      taskErrorValidationMessage.classList.replace('block' , 'hidden');
    }
  }
  else{
    taskErrorValidationMessage.classList.replace('hidden' , 'block');
  }
}

// Delete Task.
function deleteTask(taskIndex){
  tasks.splice(taskIndex,1);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  displayTasks();
}

// Update Task.
function updateTask(taskIndex){
  if(!tasks[taskIndex].done){
    tasks[taskIndex].done = true;
  }
  else{
    tasks[taskIndex].done = false;
  }
  localStorage.setItem('tasks',JSON.stringify(tasks));
  displayTasks();
}

// Display and Search Tasks Function
function displayTasks(searchTaskWord=''){
  let temp = ``;
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if(storedTasks.length!=0){
    tasks = storedTasks;
    tasks.forEach((task,taskIndex) => {
      if(task.name.toLowerCase().startsWith(searchTaskWord.toLowerCase())){
        temp+=`<li class="flex justify-between items-center pb-3 border-b-2">
      <div class="flex items-center gap-x-2 text-xl font-medium">
        <span>${taskIndex+1}-</span>
        <h2 class="w-[70%] sm:w-[80%] ${(task.done)?'line-through':''}">${task.name}</h2>
      </div>
      <div class="flex gap-x-8">
        <i class="text-xl cursor-pointer ${(task.done)?'fa-solid fa-circle-check text-green-700' : 'fa-solid fa-pen'}" data-index="${taskIndex}"></i>
        <i class="fa-solid fa-trash-can text-xl cursor-pointer text-red-700" data-index="${taskIndex}"></i>
      </div>
    </li>`
      }
    });
  }
  else{
    temp = `<h2 class="mt-[3vh] text-center text-3xl font-semibold text-gray-400">There Is No Task</h2>`;
  };
  taskList.innerHTML = temp;
}