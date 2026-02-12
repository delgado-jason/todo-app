import { v4 as uuid } from "uuid";
import "./styles.css";

import { Todo, createTodo } from "./modules/todos.js";
import * as DOM from "./modules/dom.js";

// ---- Seed Data ----

const seedData = [
  {
    id: uuid(),
    title: "Pickup Trailer",
    desc: "Need to pick up recently purchased 53 foot trailer.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Clean Truck",
    desc: "When I get home, I need to clean out my truck.",
    isComplete: true,
  },
  {
    id: uuid(),
    title: "Make $7,000 This Week",
    desc: "Need to make at least 7 thousand this week to make up for costly repairs",
    isComplete: false,
  },
];

// Storage of all the todos
const todos = [];

// Map the todo objects into the todos array
seedData.map((task) => {
  const newTodo = new Todo(task.title, task.desc);
  todos.push(newTodo);
});

DOM.renderTodoList(todos);
DOM.bindAddTodoBtn(handleAddTodoClick);
DOM.bindToggleTodo((id) => onToggle(id));

function handleAddTodoClick() {
  DOM.renderModal();

  DOM.bindTodoForm((data) => {
    if (data.title === "") {
      return alert("Title cannot be empty");
    }

    todos.push(new Todo(data.title, data.desc));
    DOM.renderTodoList(todos);
  });
}

function onToggle(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;

  todo.isComplete = !todo.isComplete;

  DOM.renderTodoList(todos);
}
