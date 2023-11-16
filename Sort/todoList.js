const todoList = [];
const button = document.querySelector('.button');


button.addEventListener('click', () => {
  const inputElement = document.querySelector('.js-name-input');
  const dateElement = document.querySelector('.js-date-input');
  const name = inputElement.value;
  const dueDate = dateElement.value;
  todoList.push({name: name, dueDate: dueDate});
  inputElement.value = '';
  renderTodoList();
});





let todoListHTML = '';
function renderTodoList() {
  todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
       <div><p>${name}</p><div><p>${dueDate}</p>  <button class="delete" type="button">delete</button></div></div> `;
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





