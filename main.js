

// var deposito = document.getElementById('deposito')
// deposito.addEventListener('click', depositar)

// function depositar(saldo) {
//   var monto = document.getElementById('monto');
//   var saldo = document.getElementById('saldo');
//   if (monto.value == 0 || monto.value == " ") {
//     alert("Ingresa un monto válido");
//   }
//   else {
//     var total = saldo + monto.value;
//     return saldo.innerHTML = "$" + total + "¨";
//   }
// }


// // Selctores
// let deposito = document.querySelector('.todo-deposito')
// let rechazado = document.querySelector('.todo-button')

// // Anadir eventos
// rechazado.addEventListener('click', addTranserencia);

// function addTranserencia(evento){
//   evento.preventDefault();

// const tomkMonto = document.createElement("div")
// tomkMonto.classList.add('tomk')

// if (tomkMonto.value === 0 || tomkMonto.value ==== " "){
//   alert("Unicamente cantidades en numeros!")
// } else {

// }

// }


// Selector
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
// Evente Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)



// Functions

function addTodo(event){
// prevension de formulario
    event.preventDefault();
    // para crear una tarea
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo");
  // para crear un lista
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // BOTONES DE Aceptado
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-dollar-sign"></i>'
  completeButton.classList.add("complete-btn")
  todoDiv.appendChild(completeButton);

  // boton de rechazado
  const rejectButton = document.createElement('button');
  rejectButton.innerHTML = '<i class="fas fa-trash"></i>'
  rejectButton.classList.add("reject-btn")
  todoDiv.appendChild(rejectButton);

  // append to list
  todoList.appendChild(todoDiv);

  // clear todo input value
  todoInput.value = "";
//  Creacion de elemento para borrar

}


function deleteCheck(evento){
  const item = evento.target
  // console.log(evento.target);
//  Eliminar cada itema
  if (item.classList[0] === 'reject-btn'){
    const todo = item.parentElement;
    todo.remove();

  }

  if (item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

