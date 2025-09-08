function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => li.remove(); // 点击删除
  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}
