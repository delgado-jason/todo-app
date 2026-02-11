export class Todo {
  constructor(tite, desc = null) {
    this.title = tite;
    this.desc = desc;
  }

  getTitle = () => {
    return this.title;
  };

  setTitle = (title) => {
    this.title = title;
  };

  getDesc = () => {
    return this.desc;
  };

  setDesc = (desc) => {
    this.desc = desc;
  };
}

export function createTodo(title, desc, todosArr) {
  const newTodo = new Todo(title, desc);

  // Push the new todo to the todos array
  todosArr.push(newTodo);
}
