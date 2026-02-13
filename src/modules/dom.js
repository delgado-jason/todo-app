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
  li.setAttribute("data-id", todo.id);
  li.innerHTML = `
        <h3 class="todo-title ${todo.isComplete ? "toggle" : ""}">${todo.title}</h3>
        <p>${todo.desc}</p>
        <label for="toggle-todo">
        Complete Task
        <input type="checkbox" class="todo-toggle" ${todo.isComplete ? "checked" : ""} />
        </label>
        <button class="delete-todo" type="button">Delete</button>
        <button class="edit-todo" type="button">Edit</button>
    `;
  return li;
}

export function bindAddTodoBtn(onClick) {
  const button = document.querySelector("#add-todo-btn");

  button.addEventListener("click", () => {
    onClick();
  });
}

export function bindTodoForm(onSubmit) {
  const form = document.querySelector("#todoForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.querySelector("#titleInput");
    const descInput = document.querySelector("#descInput");

    const data = {
      title: titleInput.value,
      desc: descInput.value,
    };

    onSubmit(data);
    closeDialog();
  });
}

export function renderModal(title, desc) {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "modal");
  dialog.innerHTML = `
    <h3>Add a Todo</h3>
        <form id="todoForm" method="dialog">
            <label for='title' name='title'>Title:</label>
            <input type='text' name='titleInput' id='titleInput' value="${title ? title : ""}" />
            <label for='desc' name='desc'>Description:</label>
            <textarea name='descInput' id='descInput'>
            ${desc ? desc : ""}
            </textarea>
            <button id="closeDialogBtn" type="button">Close</button>
            <button type="submit" id="submitBtn">Submit</button>
        </form>
  `;

  container.appendChild(dialog);
  dialog.showModal();

  const closeBtn = dialog.querySelector("#closeDialogBtn");
  closeBtn.addEventListener("click", () => {
    dialog.close();
    dialog.remove();
  });
}

function closeDialog() {
  const dialog = document.querySelector("#modal");
  if (!dialog) return;
  dialog.close();
  dialog.remove();
}

export function bindTodoListEvents({ onToggle, onDelete, onEdit }) {
  listItems.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-todo");
    if (deleteBtn) {
      const li = deleteBtn.closest("li");
      if (!li) return;

      onDelete(li.dataset.id);
      return;
    }

    const editBtn = e.target.closest(".edit-todo");
    if (editBtn) {
      const li = editBtn.closest("li");
      onEdit(li.dataset.id);
      return;
    }
  });

  listItems.addEventListener("change", (e) => {
    const checkbox = e.target.closest(".todo-toggle");
    if (!checkbox) return;

    const li = checkbox.closest("li");
    if (!li) return;
    onToggle(li.dataset.id);
  });
}
