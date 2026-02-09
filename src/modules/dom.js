//**
// All dom elements must be created and minipulated in this file
// index.js does not care about the DOM. */

// Set the heading for the page
export const container = document.getElementById("content");
const header = document.createElement("h1");
header.textContent = "A Simple Todo Application";
container.appendChild(header);

//**
// Create an 'Add Todo' button.
// This button should open up a modal. */
const todoButton = document.createElement("button");
todoButton.setAttribute("id", "add-todo-btn");
todoButton.textContent = "Add a Todo";
container.appendChild(todoButton);

// Display Form
// container.appendChild(renderForm());

const listItems = document.createElement("ul");
container.appendChild(listItems);

export function renderTodoList(todos) {
  listItems.innerHTML = "";

  todos.forEach((todo) => {
    const item = createTodoElement(todo);
    listItems.appendChild(item);
  });
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.desc}</p>
    `;
  return li;
}

function renderForm() {
  const formContainer = document.createElement("div");

  // Set the id for the form container
  formContainer.setAttribute("id", "formContainer");

  formContainer.innerHTML = `
        <h3>Add a Todo</h3>
        <form>
            <label for='title' name='title'>Title:</label>
            <input type='text' name='titleInput' id='titleInput' />
            <label for='desc' name='desc'>Description:</label>
            <input type='text' name='descInput' id='descInput' />
            <button>Add Todo</button>
        </form>
    `;
  return formContainer;
}

export function bindAddTodoBtn(onClick) {
  const button = document.querySelector("#add-todo-btn");

  button.addEventListener("click", () => {
    onClick();
  });
}

export function renderModal() {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <h3>Add a Todo</h3>
        <form>
            <label for='title' name='title'>Title:</label>
            <input type='text' name='titleInput' id='titleInput' />
            <label for='desc' name='desc'>Description:</label>
            <input type='text' name='descInput' id='descInput' />
            <button>Add Todo</button>
        </form>
  `;

  container.appendChild(dialog);
  dialog.showModal();
}
