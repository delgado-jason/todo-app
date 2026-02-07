import "./styles.css";

import { Todo, createTodo } from "./modules/todos.js";
import { container, renderTodoList } from "./modules/dom.js";

// ---- Seed Data ----

const seedData = [
  {
    title: "Pickup Trailer",
    desc: "Need to pick up recently purchased 53 foot trailer.",
  },
  {
    title: "Clean Truck",
    desc: "When I get home, I need to clean out my truck.",
  },
  {
    title: "Make $7,000 This Week",
    desc: "Need to make at least 7 thousand this week to make up for costly repairs",
  },
];

// Storage of all the todos
const todos = [];

// Map the todo objects into the todos array
seedData.map((task) => {
  const newTodo = new Todo(task.title, task.desc);
  todos.push(newTodo);
});

renderTodoList(todos);
