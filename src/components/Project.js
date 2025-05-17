

export default class Project {
    constructor(name="Personal") {
        this.name = name;
        this.todos = []; // empty array store project specific Todos
    }

    // Getters and Setters
    getName() {
        return this.name;
    }

    getTodos() {
        for (let todo in this.todos) {
            return this.todos[todo];
        }
    }

    setName(name) {
        this.name = name;
    }

    setTodo(task) {
        this.todos.push(task);
    }
}