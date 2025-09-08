// 加载已有任务
window.onload = function () {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  savedTodos.forEach(text => {
    createTodoItem(text);
  });
};

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text === '') return;

  createTodoItem(text);
  saveTodo(text);
  input.value = '';
}

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => {
    li.remove();
    deleteTodo(text);
  };
  document.getElementById('todo-list').appendChild(li);
}

function saveTodo(text) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(text);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(text) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(item => item !== text);
  localStorage.setItem('todos', JSON.stringify(todos));
}
