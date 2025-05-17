import Todo from "./components/Todo";
import Project from "./components/Project";

const app = (function() {
    
    // Create default project
    const defaultProject = new Project();

    // Create default Todo
    const defaultTodo = new Todo('Create more todos', 'Add more todos to this project', '5-31-2025', 'High');

    // Add default Todo to default Project
    defaultProject.setTodo(defaultTodo);

    // Log the Todo
    console.log(defaultProject.getTodos.toString())

})();

