const todoList = [];
const button = document.querySelector('.button');


button.addEventListener('click', () => {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = '';
  renderTodoList();
});





let todoListHTML = '';
function renderTodoList() {
  todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const name = todoList[i];
    const html = `
       <div><p>${name}</p><button class="delete" type="button">delete</button></div> `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;


  const deleteButtons = document.querySelectorAll('.delete');

  deleteButtons.forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
};





